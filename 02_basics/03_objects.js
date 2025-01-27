//singleton
// Object.create


//object literals

const mySym = Symbol("key1")


const JsUser = {
    name:"Ashudev",
    "fullname":"Ashudev Garg",// now this can not be access using dot method 
    age:18,
    [mySym]:"mykey1",//to use it as symbol use of this [] otherwise its type is string
    location:"barnala",
    email:"ashudev.cs.24@nitj.ac.in",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]
}
console.log(JsUser.email) //ashudev.cs.24@nitj.ac.in
console.log(JsUser["email"])//ashudev.cs.24@nitj.ac.in
console.log(JsUser["fullname"])//Ashudev Garg
console.log(JsUser[mySym])

JsUser.email = "ashudevg@gmail.com" // updating email
// Object.freeze(JsUser) //To freeze the object
JsUser.email = "dev.@"
console.log(JsUser)
// {
//     name: 'Ashudev',
//     fullname: 'Ashudev Garg',
//     age: 18,
//     location: 'barnala',
//     email: 'ashudevg@gmail.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }

 
JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
