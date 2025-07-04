let a = 10
const b = 20
var c = 20 // is not used because it can print value out of scope 
// in it is used.

if(true){
    var c = 300

}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "darshi"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

one()








function addone(num) {
    return num + 1
}

addone(5)



const addtwo = function (num) {
    return num + 2
}

addtwo(5)

console.log(addtwo(5));
