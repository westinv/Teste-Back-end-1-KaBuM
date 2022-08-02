import { Response, Request } from "express";
import { ComputeShippingUseCase } from "./ComputeShippingUseCase";



class ComputeShippingController {
    constructor(private computeShippingUseCase: ComputeShippingUseCase) { }

    handle(request: Request, response: Response): Response {
        const { dimensao, peso } = request.body;
        try {
            const shipping = this.computeShippingUseCase.execute({
                dimensao,
                peso
            });

            return response.status(201).json(shipping);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}

export { ComputeShippingController };