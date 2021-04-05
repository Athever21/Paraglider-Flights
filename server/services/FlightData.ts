import https from "https";
import { Stream } from "node:stream";

interface Location {
  long: string;
  lat: string;
}

class FlightData {
  public pilot!: string;
  public glider!: string;
  public timeStart!: string;
  public timeStop!: string;
  public travelTime!: string;
  public start!: string;
  public end!: string;
  public prev!: string;
  private startLocation!: Location;
  private endLocation!: Location;

  public processUrl(url: string) {
    return new Promise<void>((resolve) => {
      https.get(url, (stream) => this.processData(stream, resolve));
    });
  }

  private processLine(line: string) {
    if (line.includes("PILOT")) {
      this.pilot = line.split(":").pop() as string;
    }

    if (line.includes("GLIDERTYPE")) {
      this.glider = line.split(":").pop() as string;
    }

    if (line[0] === "B") {
      let time = "";
      let lat = "";
      let long = "";
      let curr = "time";

      for (let i = 1; i < line.length; i++) {
        const letter = line[i];
        if (i == 7) {
          curr = "lat";
        } else if (letter === "N" || letter === "S") {
          lat += letter;
          curr = "long";
          continue;
        } else if (line === "W" || letter === "E") {
          long += letter;
          curr = "alt";
          break;
        }

        if (curr === "time") time += letter;
        if (curr === "lat") lat += letter;
        if (curr === "long") long += letter;
      }

      if (!this.timeStart) this.timeStart = time;
      this.timeStop = time;
      if (!this.startLocation) this.startLocation = { long, lat };
      this.endLocation = { long, lat };
      // process.stdout.write("\n------ FLIGHT DATA START ----- \n");
      // process.stdout.write(`TIME: ${time} \n`);
      // process.stdout.write(`LAT: ${lat} \n`);
      // process.stdout.write(`LONG: ${long} \n`);
      // process.stdout.write("\n------ FLIGHT DATA END ----- \n");
      // process.stdout.write(`\n------ ${line} ----- \n`);
      // process.stdout.write("\n------ ORGINAL ----- \n");
    }
  }

  private processChunk(d: string) {
    const arr = d.toString().split("\r");
    arr.forEach((x: string, i: number) => {
      if (i === arr.length - 1) {
        this.prev = x;
      } else {
        let line = i === 0 ? this.prev + x : x;
        this.processLine(line.trim());
      }
    });
  }

  private processData(data: Stream, resolve: Function) {
    data.on("data", (d) => this.processChunk(d));
    data.on("end", () => {
      this.travelTime = countTime(this.timeStart, this.timeStop);
      this.timeStart = addColons(this.timeStart);
      this.timeStop = addColons(this.timeStop);
      Promise.all([getPlace(this.startLocation), getPlace(this.endLocation)])
        .then((values: any) => {
          this.start = values[0][0].formatted;
          this.end = values[1][0].formatted;
          resolve();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}

function addColons(time: string) {
  const arr = time.split("");
  arr.splice(2, 0, ":");
  arr.splice(5, 0, ":");
  return arr.join("");
}

function countTime(time1: string, time2: string) {
  const t1 = converTime(time1);
  const t2 = converTime(time2);

  const hours = addZero(Math.abs(t1.hours - t2.hours));
  const minutes = addZero(Math.abs(t1.minutes - t2.minutes));
  const seconds = addZero(Math.abs(t1.seconds - t2.seconds));

  let time = `${hours}:${minutes}:${seconds}`;

  return time;
}

function addZero(n: number) {
  if (n > 10) return n;
  return `0${n}`;
}

function converTime(time: string) {
  const hours = parseInt(time.substring(0, 2));
  const minutes = parseInt(time.substring(2, 4));
  const seconds = parseInt(time.substring(4, 6));

  return {
    hours,
    minutes,
    seconds,
  };
}

function getPlace(coordinates: Location) {
  return new Promise((resolve, reject) => {
    const key = process.env.API_KEY;
    const lat = convertLat(coordinates.lat);
    const long = convertLong(coordinates.long);
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${key}`;
    https.get(url, (res) => {
      let data = "";

      res.on("data", (d) => (data += d));
      res.on("end", () => resolve(JSON.parse(data).results));
      res.on("error", (err) => reject(err));
    });
  });
}

function convertLat(lat: string) {
  const arr = lat.split("");
  const d = arr.pop();

  if (d === "S") arr.unshift("-");
  arr.splice(2, 0, ".");
  if (arr[0] === "0") arr.shift();
  return arr.join("");
}

function convertLong(long: string) {
  const arr = long.split("");
  const d = arr.pop();

  if (d === "W") arr.unshift("-");
  arr.splice(3, 0, ".");
  if (arr[0] === "0") arr.shift();
  if (arr[0] === "0") arr.shift();
  return arr.join("");
}

export default FlightData;
