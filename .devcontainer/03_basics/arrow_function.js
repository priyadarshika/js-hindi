const user = {
    username: "darshi",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()




const chai =  () => {
    let username = "darshi"
    console.log(this);
    
}
// "this" can not be used in any function not any specifcation with any fuction eg:arrow function
chai()



const addTwo = (num1 , num2) =>{
    return num1 + num2
}

console.log(addTwo(3,4));


