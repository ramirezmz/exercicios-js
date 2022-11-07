function countBs(word) {
    return countChar(word, "B")
}

function countAs(word) {
    return countChar(word, "A")
}

function countChar(word, char) {
    let countBs = 0
    let lengthWord = word.length

    for( let i = 0; i < lengthWord ; i++) {
        if (word.charAt(i) = char) {
            countBs ++
        }
    }
    
    return countBs
}

console.log(countBs('BBC'))
console.log(countBs("Bruno"))
console.log(countBs("bruno"))
console.log(countChar("kakkerlak", "k"))
console.log(countChar("larissa", "a"))
module.exports = {
    countBs,
    countChar
}