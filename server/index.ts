import express, { Response } from "express";
import { promises as fs } from "fs";
import path from "path";
import template from "./template";

const cwd = process.cwd();
const app = express();
let src = '<script src="/build/bundle.js"></script>';

if (process.env.NODE_ENB === "production") {
  src = "";
  (async () => {
    const dir = await fs.readdir(path.join(cwd, "build"));
    dir.forEach((filename: String) => {
      if (filename.includes("bundle")) {
        src += `\n\t<script src="/build/${filename}"></script>`;
      }
    });
  })();
} else {
  require("./devBundle").default(app);
}

app.use("/build/", express.static(path.join(cwd, "build")));
app.get("*", (_, res: Response) => {
  return res.send(template(src));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening at PORT ${PORT}`));