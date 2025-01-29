
function sayMyName(){
  console.log("A");
  console.log("S");
  console.log("H");
  console.log("U");
  console.log("D");
  console.log("E");
  console.log("V");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

addTwoNumbers(3, 5)

function addTwoNumbers(number1, number2){

  // let result = number1 + number2
  // return result
  return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
  if(!username){
      console.log("PLease enter a username");
      return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage("Ashudev"))
// console.log(loginUserMessage("Ashudev"))


function calculateCartPrice(...num1){
  return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))// add to array using ...num1 [ 200, 400, 500, 2000 ]


function calculateCartPrice(val1, val2, ...num1){
  return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))// [ 500, 2000 ]
// val1 stores 200,val2 stores 400 and ...num1 stores 500, 2000

const user = {
  username: "Ashudev",
  prices: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user) // we can pass object as argument

handleObject({ // we can pass object directly
  username: "sam",
  price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}


console.log(returnSecondValue(myNewArray)); //here we can pass array as argument

console.log(returnSecondValue([200, 400, 500, 1000]));//here we can pass array directly

