import express from "express";
import { shippingRoutes } from "./routes/shipping.routes";
import SwaggerUi from "swagger-ui-express";

import swaggerFile from "./swagger.json"

const app = express();

app.use(express.json());

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerFile))

app.use("/shipping", shippingRoutes)

export { app };
