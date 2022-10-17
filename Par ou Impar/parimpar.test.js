const code = require("./code")
console.log = jest.fn()

describe("Par ou Impar  ", () => {
    it("Deve retornar se é par ou ímpar corretamente", () => {
        const response = code(10)
        expect(response).toBe(true)
    })

    it("Deve retornar se é par ou ímpar corretamente", () => {
        const response = code(15)
        expect(response).toBe(false)
    })

    it("Deve retornar se é par ou ímpar corretamente", () => {
        const response = code(-2)
        expect(response).toBe(true)
    })

    it("Deve retornar se é par ou ímpar corretamente", () => {
        const response = code(-3)
        expect(response).toBe(false)
    })
})