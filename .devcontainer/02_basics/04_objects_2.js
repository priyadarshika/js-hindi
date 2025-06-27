// const tinderuser = new Object() --- singleton object

const tinderuser = {} // non singleton obj

tinderuser.id = "1234r"
tinderuser.name = "sam"
tinderuser.isloggedIn = false

// console.log(tinderuser);

const regularUser = {
    email: "niuchwb@gmail.com",
    fullname: {
        userfullname: {
            fistname: "darshi",
            lastname: "singh"

        }
    }
}

// console.log(regularUser.fullname.userfullname);
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"s", 4:"b"}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);


// const user = [
//     {
//         id:"1",
//         email: "jsxnhs@gmail.com",
//     }
// ]

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));

console.log(Object.hasOwnProperty("isloggedIn"));
