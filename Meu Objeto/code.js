function code(meuObjeto) {
    const keys = Object.keys(meuObjeto) 
    for(let i = 0; i < keys.length ; i++) {
        let indexKey = keys[i]
        console.log(`Meu ${keys[i]} é ${meuObjeto[indexKey]}`)
    }
}

const eu = {
    nome: 'Roberto',
    cabelo: 'Preto',
    monitor: 'Pequeno',
    copo: 'Branco'
}

// code(eu)

module.exports = code