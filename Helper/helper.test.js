const Helper = require("./code")

describe("Helper", () => {
    it("Deve retornar se o número é par corretamente", () => {
        const response = Helper.isEven(2)
        expect(response).toBe(true)
    })

    it("Deve retornar se o número é par corretamente", () => {
        const response = Helper.isEven(3)
        expect(response).toBe(false)
    })

    it("Deve retornar se o número é positivo corretamente", () => {
        const response = Helper.isPositive(2)
        expect(response).toBe(true)
    })

    it("Deve retornar se o número é positivo corretamente", () => {
        const response = Helper.isPositive(-10)
        expect(response).toBe(false)
    })

    it("Deve retornar se o número é negativo corretamente", () => {
        const response = Helper.isNegative(-10)
        expect(response).toBe(true)
    })

    it("Deve retornar se o número é negativo corretamente", () => {
        const response = Helper.isNegative(10)
        expect(response).toBe(false)
    })
})