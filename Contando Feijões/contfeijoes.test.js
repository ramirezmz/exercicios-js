const code = require("./code")
const { countBs, countChar } = code

describe("countBs", () => {
    it("Deve retornar a quantidade de Bs corretamente", () => {
        const response = countBs("BBC")
        expect(response).toBe(2)
    })

    it("Deve retornar a quantidade de Bs corretamente", () => {
        const response = countBs("Bruno")
        expect(response).toBe(1)
    })

    it("Deve retornar a quantidade de Bs corretamente", () => {
        const response = countBs("bruno")
        expect(response).toBe(0)
    })
})

describe("countChar", () => {
    it("Deve retornar a quantidade de Bs corretamente", () => {
        const response = countChar("kakkerlak", "k")
        expect(response).toBe(4)
    })

    it("Deve retornar a quantidade de Bs corretamente", () => {
        const response = countChar("larissa", "a")
        expect(response).toBe(2)
    })
})