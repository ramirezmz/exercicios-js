function countBs(word) {
    let countB = 0
    for(let i = 0; i < word.length; i++) {
       if(word.charAt(i) != 'B') {
        countB += 0
            // console.log(word.charAt(i), 'false')
       } else {
        // console.log(word.charAt(i), 'true')
        countB ++
       }
    }
    return countB
}

function countChar(word, char) {
    let countBs = 0
    let lengthWord = word.length

    for( let i = 0; i < lengthWord ; i++) {
        if(word.charAt(i) != char) {
            countBs += 0
        } else {
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