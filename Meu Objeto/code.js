function code(meuObjeto) {
    const keys = Object.keys(meuObjeto) 

    for(let i = 0; i < keys.length ; i++) {
        let indexKey = keys[i]
        console.log(`Meu ${keys[i]} é ${meuObjeto[indexKey]}`)
    }

    for(var key of keys) {
        console.log(`Meu ${keys[key]} é ${meuObjeto[key]}`)
    }

    for(var property in meuObjeto) {
        console.log(`Meu ${property} é ${meuObjeto[property]}`)
    }

    for(let [key, value] of Object.entries(meuObjeto)) {
        console.log(`Meu ${key} é ${value}`)
    }
}

/**
 * keys => retorna as propriedades
 * entries => retorna propriedade e valor
 * values => retorna só valores
 */

const eu = {
    nome: 'Roberto',
    cabelo: 'Preto',
    monitor: 'Pequeno',
    copo: 'Branco'
}

code(eu)

module.exports = code