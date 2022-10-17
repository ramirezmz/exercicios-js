const code = require("./code")
console.log = jest.fn()

describe("Triâgulo com Loop", () => {
    it("Deve retornar o triângulo corretamete", () => {
        code()
        expect(console.log).toHaveBeenNthCalledWith(1, "#")
        expect(console.log).toHaveBeenNthCalledWith(2, "##")
        expect(console.log).toHaveBeenNthCalledWith(3, "###")
        expect(console.log).toHaveBeenNthCalledWith(4, "####")
        expect(console.log).toHaveBeenNthCalledWith(5, "#####")
        expect(console.log).toHaveBeenNthCalledWith(6, "######")
        expect(console.log).toHaveBeenNthCalledWith(7, "#######")
    })
})