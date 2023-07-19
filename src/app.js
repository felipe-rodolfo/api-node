import express from "express";
import routes from "./routes/index.js";
import conn from "./config/dbConnect.js";
const app = express();

conn.once("open", () => {
    console.log("connection ok");
});

app.use(express.json());

routes(app);

export default app;