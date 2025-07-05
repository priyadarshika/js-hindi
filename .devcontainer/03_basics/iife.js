// Immediatetly Invoked Function Expression(IIFE)

// used beacuse:1.Avoids Global Scope Pollution = In JavaScript, variables declared without a specific scope (like var) can leak into the global scope, potentially causing conflicts with other scripts
// 2. Encapsulation = IIFEs are great for encapsulating logic. They allow you to group related code together while keeping it isolated from the rest of your application.
// 3. Executes Code Immediately
// 4. Useful in Module Patterns

(function chai(){
    console.log(`DB CONNECTED`);
    
})();
(function dsa(name){
    console.log(`DB CONNECTED ${name}`);
    
})("darshi");