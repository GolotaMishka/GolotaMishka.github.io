function grobnicaHeopsa(number){
  let pyramid = "";
  let str = "";
  for(let i= 1; i <= number; i++){
    for(let j=1;j <= number; j++){
      console.log(j.toString())
    str = j.toString().repeat(j)
      pyramid += "\n" + str
  }
}
return pyramid
}
console.log(grobnicaHeopsa(9))