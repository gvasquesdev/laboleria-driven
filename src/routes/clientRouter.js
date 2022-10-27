import { Router } from "express";

import { createClient } from "../controllers/clientController.js"; 
import clientValidate from "../middlewares/clientMiddleware.js";

const clientRouter = Router();

clientRouter.post('/clients', createClient)

export default clientRouter;