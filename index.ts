import express, { Application } from "express";
import routes from "./v1/routes";

const app: Application = express();
const PORT = 3000;

app.use("/v1/converter", routes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
