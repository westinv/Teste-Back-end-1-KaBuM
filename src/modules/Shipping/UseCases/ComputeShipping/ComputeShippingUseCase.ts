import { Shipping } from "../../model/Shipping";

class ComputeShippingUseCase {

    constructor() { }

    execute({ dimensao, peso }: Shipping) {
        let shippingArray = []
        const { altura, largura } = dimensao
        const validaEntregaNinja = altura >= 10 && altura <= 200 && largura >= 6 && largura <= 140 && peso > 0
        const validaEntregaKabum = altura <= 140 && altura >= 5 && largura <= 125 && largura >= 13 && peso > 0

        if (validaEntregaNinja) {
            const valor = (peso * 0.3 / 10)
            const prazo = 6
            shippingArray.push({
                nome: "Entrega Ninja",
                valor_frete: valor,
                prazo_dias: prazo
            })

        }
        if (validaEntregaKabum) {
            const valor = (peso * 0.2 / 10)
            const prazo = 4
            shippingArray.push({
                nome: "Entrega Kabum",
                valor_frete: valor,
                prazo_dias: prazo
            })
        }
        return shippingArray

    }
}
export { ComputeShippingUseCase };





