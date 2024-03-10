var x = 10; 
function foo()
{ 
console.log(x); 
var x = 20; 
} 
foo(); 

//The output of this code snippet will be undefined.

//Here's what happens step by step:

//1. The variable x is declared and initialized with the value 10 in the global scope.
//2. The function foo is declared. Inside foo, there's a console.log(x) statement and a variable x is declared and initialized with the value 20.
//3. When foo() is called, it first looks for the value of x inside its own scope. Since there's a declaration var x = 20, the variable x is created in the scope of foo, but it's hoisted to the top of the function scope. However, at this point, it hasn't been assigned a value yet, so its value is undefined. Therefore, console.log(x) prints undefined.

//This behavior occurs due to variable hoisting in JavaScript. The declaration of var x = 20 is hoisted to the top of the function foo, but the assignment (x = 20) remains in its original place. So, when console.log(x) is encountered before the assignment, the value of x is undefined in the local scope of foo.
