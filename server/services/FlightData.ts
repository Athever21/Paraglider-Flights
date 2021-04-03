import https from "https";
import { Stream } from "node:stream";

class FlightData {
  public pilot: string = "";
  public glider: string = "";
  public prev: string = "";

  public processUrl(url: string) {
    return new Promise<void>((resolve) => {
      https.get(url, (stream) => this.processData(stream, resolve));
    });
  }

  private processLine(line: string) {
    if (line.includes("PILOT")) {
      this.pilot = line.split(":").pop()?.trim() as string;
    }

    if (line.includes("GLIDERTYPE")) {
      this.glider = line.split(":").pop()?.trim() as string;
    }
  }

  private processChunk(d: string) {
    const arr = d.toString().split("\r");
    arr.forEach((x: string, i: number) => {
      if (i === arr.length - 1) {
        this.prev = x;
      } else {
        let line = i === 0 ? this.prev + x : x;
        // process.stdout.write(line);
        this.processLine(line);
      }
    });
  }

  private processData(data: Stream, resolve: Function) {
    data.on("data", (d) => this.processChunk(d));
    data.on("end", () => resolve());
  }
}

export default FlightData;
