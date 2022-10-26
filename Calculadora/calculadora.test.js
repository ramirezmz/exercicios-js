const Calculadora = require("./code")
const calculadora = new Calculadora()

describe("Calculadora", () => {
    it("Deve somar dois números corretamente", () => {
        const response = calculadora.somar(1, 2)
        expect(response).toBe(3)
    })

    it("Deve subtrair dois números corretamente", () => {
        const response = calculadora.subtrair(2, 1)
        expect(response).toBe(1)
    })

    it("Deve dividir dois números corretamente", () => {
        const response = calculadora.dividir(4, 2)
        expect(response).toBe(2)
    })

    it("Deve multiplicar dois números corretamente", () => {
        const response = calculadora.multiplicar(4, 2)
        expect(response).toBe(8)
    })
})