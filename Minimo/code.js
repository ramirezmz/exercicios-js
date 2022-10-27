function minimo(x, y) {
  if(x === y){
    console.log(`${x} e ${y} são iguais`)
  } else{
    if(x > y) {
      return y
    } else {
      return x
    }
  }
}

module.exports = minimo