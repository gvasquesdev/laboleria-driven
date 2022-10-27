import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routes/index.js";

dotenv.config();

const server = express();

server.use(cors(), json());
server.use(router);

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Cakes are being baked on port ${port}`);
});