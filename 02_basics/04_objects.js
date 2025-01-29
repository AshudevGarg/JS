// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));//[ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true




const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ashudev",
            lastname: "Garg"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


const obj3 = Object.assign({}, obj1, obj2, obj4) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// in this we are pushing all objects in the first object{} and then returning it
// if we donot give {} then it will push objects in obj 1 which is also same but it is not recommended



// const obj3 = {...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Ashudev"
}

// course.courseInstructor

const {courseInstructor: instructor} = course//changing the name of the key from courseInstructor to instructor

// console.log(courseInstructor);
console.log(instructor); //Ashudev

// {
//     "name": "Ashudev",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[            // generally used for APIS to get data
    {},
    {},
    {}
]
