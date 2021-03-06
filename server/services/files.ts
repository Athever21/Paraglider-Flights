import { Request, Response } from "express";
import FlightData from "./FlightData";

export const fromLink = (req: Request, res: Response) => {
  const url = req.body.url;
  const filght = new FlightData();

  filght
    .processUrl(url)
    .then(() => res.json(JSON.stringify(filght)))
    .catch(() => res.status(400).json({ error: "Invalid link to file" }));
};
