/**
 * Let's create scopes in different ways.
 */


// Scope A: Global scope out here

let name = 'Todd';


function myFunction() {
    // Scope B: Local scope in here

    console.log('\n\n>>> Inside myFunction');

    let name = 'Angela';
    let age = 20;

    console.log("name = ", name); // Angela

    console.log("age = ", age); //20


    console.log('>>> End of  myFunction\n\n');
}

// This is also "Scope A"
let age = 30;

function myOtherFunction() {
    // Scope C: Local scope in here
    console.log('\n\n>>> Inside myOtherFunction');

    let age = 25;

    console.log("name = ", name); // Todd
    console.log("age = ", age); // 25

    console.log('>>> End of  myOtherFunction\n\n');
}


function myThirdFunction() {
    // Scope D: Local scope in here
    console.log('\n\n>>> Inside myThirdFunction');

    // let's change the value set for variables in global scope

    name = "Elliot";
    age = 27;

    console.log('>>> End of  myThirdFunction\n\n');

}


console.log("name = ", name); // Todd
console.log("age = ", age); // 30

myFunction();

myOtherFunction();

console.log("age = ", age); // 30

myThirdFunction();
console.log("name = ", name); // Elliot
console.log("age = ", age); // 27

