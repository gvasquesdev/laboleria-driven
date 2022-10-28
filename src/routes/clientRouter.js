import { Router } from "express";

import { createClient } from "../controllers/clientController.js";
import schemaValidate from "../middlewares/schemaMiddleware.js";
import clientSchema from "../schemas/clientSchema.js";

const clientRouter = Router();

clientRouter.post('/clients', schemaValidate(clientSchema), createClient)

export default clientRouter;