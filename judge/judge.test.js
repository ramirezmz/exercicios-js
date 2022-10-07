const tests = require("./tests.json")
const palindrome = require("../index")
const { palindromes, notPalindromes } = tests

describe("test palindrome function", () => {
    test.each(palindromes)(`Teste do palindromo "%s"`, text => {
        const result = palindrome(text)
        expect(result).toBe(true)
    })

    test.each(notPalindromes)(`Teste da palavra/frase comum "%s"`, text => {
        const result = palindrome(text)
        expect(result).toBe(false)
    })
})