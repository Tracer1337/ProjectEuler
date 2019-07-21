const permutator = (inputArr) => {
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0)
      result.push(m)
    else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }
 permute(inputArr)
 return result;
}

function alreadyCalculated(array, number){
  let inArray = false
  array.forEach(a => {
    if(a[2] == number)
      inArray = true
  })
  return inArray
}

const combinations = permutator([1,2,3,4,5,6,7,8,9]), result = []
combinations.forEach(arr => {
  for(let i = 1; i < arr.length - 1; i++){
    for(let j = i+1; j < arr.length; j++){
      let factor1 = parseInt(arr.slice(0, i).join(""))
      let factor2 = parseInt(arr.slice(i, j).join(""))
      let product = parseInt(arr.slice(j, arr.length).join(""))
      if(!alreadyCalculated(result, product))
        if(factor1 * factor2 == product)
          result.push([factor1, factor2, product])
    }
  }
})
let sum = 0
result.forEach(n => sum+=n[2])
console.log(result, sum)
