const functions = require("../exercicios/index")
const { balance: balanceFn, search: searchFn, filter: filterFn, transform: transformFn } = functions

const tests = require("./tests.json")
const { balance, search, filter, transform } = tests

describe("test array manipulation", () => {
    it("should calculate account balance correctly", () => {
        const result = balanceFn(balance)
        expect(result).toBe(153.1)
    })

    it("should return the correct needle index", () => {
        const result = searchFn(search)
        expect(result).toBe(6)
    })

    it("should return only water type", () => {
        const result = filterFn(filter)
        expect(result).toMatchObject([{ type: "AGUA" }])
    })

    it("should return transform raw materials correctly", () => {
        const result = transformFn(transform)
        const expectedResult = [{ type: "LAPIS" }, { type: "TIJOLO" }, { "type": "PANELA" }]
        expect(result).toMatchObject(expectedResult)
    })
})