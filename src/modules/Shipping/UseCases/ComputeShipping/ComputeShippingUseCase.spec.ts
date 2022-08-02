import { ComputeShippingUseCase } from "./ComputeShippingUseCase"

describe("Cotação de Fretes", () => {

    it("deve criar e mostar frete Entrega Ninja ", () => {
        const computeShipping = new ComputeShippingUseCase()

        const shipping = computeShipping.execute({
            peso: 12,
            dimensao: {
                altura: 12,
                largura: 15
            },
        })

        expect(shipping[0].nome).toBe("Entrega Ninja")
    }),

        it("deve criar e mostar frete Entrega Kabum ", () => {
            const computeShipping = new ComputeShippingUseCase()

            const shipping = computeShipping.execute({
                peso: 12,
                dimensao: {
                    altura: 12,
                    largura: 15
                },
            })

            expect(shipping[1].nome).toBe("Entrega Kabum")
        }),

        it("deve mostrar as duas entregas Kabum e Frete", () => {
            const computeShipping = new ComputeShippingUseCase()

            const shipping = computeShipping.execute({
                peso: 400,
                dimensao: {
                    altura: 102,
                    largura: 40
                },
            })
            expect(shipping[0].nome).toBe("Entrega Ninja")
            expect(shipping[0].valor_frete).toBe(12)

            expect(shipping[1].valor_frete).toBe(8)
            expect(shipping[1].nome).toBe("Entrega Kabum")
        })


})
