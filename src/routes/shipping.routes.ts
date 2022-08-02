import { Router } from "express";
import { shippingController } from "../modules/Shipping/UseCases/ComputeShipping"


const shippingRoutes = Router();

shippingRoutes.post('/', (request, response) =>
    shippingController.handle(request, response)
);

export { shippingRoutes }