const code = require("./code")
console.log = jest.fn()

describe("Mínimo", () => {
    it("Deve retornar o valor mínimo corretamente", () => {
        const response = code(100, 10)
        expect(response).toBe(10)
    })

    it("Deve retornar o valor mínimo corretamente", () => {
        const response = code(15, 100)
        expect(response).toBe(15)
    })

    it("Deve retornar o valor mínimo corretamente", () => {
        const response = code(-1000, 100)
        expect(response).toBe(-1000)
    })

    it("Deve retornar o valor mínimo corretamente", () => {
        const response = code(-1000, -1250)
        expect(response).toBe(-1250)
    })
})