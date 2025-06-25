// SINGOLETON

//Object literals
// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "darshi",
    "full name": "priyadarshika",
    age: 23,
    location: "jaipure",
    email: "darshi@gmail.com",
    isloggedIn: false,
    lastLoginDays:["monday","saturday"]
}

console.log(JsUser["full name"]);
console.log(JsUser["email"]);

