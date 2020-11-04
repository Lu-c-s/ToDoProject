import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("server running on port 3333"));
