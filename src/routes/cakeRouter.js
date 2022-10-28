import { Router } from "express";
import { createCake } from "../controllers/cakeController.js";
import schemaValidate from "../middlewares/schemaMiddleware.js";
import cakeSchema from "../schemas/cakeSchema.js";

const cakeRouter = Router();

cakeRouter.post('/cakes', schemaValidate(cakeSchema), createCake)

export default cakeRouter;