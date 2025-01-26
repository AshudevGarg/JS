// array

const myArr =[0,1,2,3,4,5,6,7]
const myHeors=["shaktiman","naagraj"]
const myArr2=new Array(1,2,3,4)
// console.log(myArr2[1]);

// // Array methods
myArr.push(8) // add value
myArr.push(9) 
myArr.pop() //remove last value
myArr.unshift(9) // add value  in start
myArr.shift() //remove 1st value
// console.log(myArr.includes(9))//checks that the value is exist or not
// console.log(myArr.indexOf(19))//return -1 if value does not exist
const newArr = myArr.join()//convert array to string
// console.log(myArr)
// console.log(newArr)

//slice ,splice

console.log("A ",myArr)  //A  [0, 1, 2, 3, 4, 5, 6, 7, 8]
const myn1=myArr.slice(1,3) //[ 1, 2 ]
console.log(myn1)
console.log("B ",myArr) //B  [0, 1, 2, 3, 4, 5, 6, 7, 8]

console.log("A ",myArr)   //A  [0, 1, 2, 3, 4, 5, 6, 7, 8]
const myn2=myArr.splice(1,3)
console.log(myn2)//[ 1, 2, 3 ]
console.log("B ",myArr) //B  [ 0, 4, 5, 6, 7, 8 ]

// Slice does not effect the original array
// Splice effect the original array it  can cut it