
import { ComputeShippingController } from "./ComputeShippingController";
import { ComputeShippingUseCase } from "./ComputeShippingUseCase";


const shippingUseCase = new ComputeShippingUseCase();
const shippingController = new ComputeShippingController(shippingUseCase);

export { shippingController }