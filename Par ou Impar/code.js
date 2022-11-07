/**
Valor recebido: 5
Sua função checa: é 0 ou 1?
Como a resposta é não, subtraímos dois e executamos novamente

Valor recebido: 3
Sua função checa: é 0 ou 1?
Como a resposta é não, subtraímos dois e executamos novamente

Valor recebido: 1
Sua função checa: é 0 ou 1?
Como a resposta é sim, sua função sabe o que deve ser feito 
 *
 */

function isEven(n) {
    if (n === 0) {
        // console.log(`${n} response: eu sou par`)
        return true
    }

    else if (n === 1) {
        // console.log(`${n} responde: eu sou impar`)
        return false
    }

    else {
        // console.log(`${n} pergunta para o ${n-2}: você é par ou impar?`)
        return isEven(n - 2)
    }
}

isEven(8)
module.exports = isEven