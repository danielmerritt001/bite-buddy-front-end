// function useState(initialState){
//   return [initialState, stateSetterFunction]
// }

function fun(){
  return [3, 5]
}

const [num1, num2] = fun()

const arr = fun()

console.log(arr)


console.log(num1, num2)
