const user = {
  username: "Ashudev",
  price: 999,

  welcomeMessage: function() {
      console.log(`${this.username} , welcome to website`);
      console.log(this);
  }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage() //this will get current value


// console.log(this);

// function chai(){
//     let username = "Ashudev"
//     console.log(this.username);
// }

// chai() //no output 


// const chai = function () {
//     let username = "Ashudev"
//     console.log(this.username); //undefined
// }

const chai =  () => {
  let username = "Ashudev"
  console.log(this);
}


chai() //{} 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // no need for return 

const addTwo = (num1, num2) => ({username: "Ashudev"}) //{ username: 'Ashudev' }


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()