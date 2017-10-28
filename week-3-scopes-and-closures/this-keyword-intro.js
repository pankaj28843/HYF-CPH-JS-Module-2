// `this` in a Global context
console.log('\n\n>>> `this` in a Global context');

console.log(this); // Window


// `this` in object construction
console.log('\n\n>>> `this` in object construction');

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let greg = new Person('Gregg', 25);
let thomas = new Person('Thomas', 27);

console.log(greg);
console.log(thomas);

// `this` in an object method
console.log('\n\n>>> `this` in an object method');

let o = {
    greeting: 'Hello!',
    greet(name) {
        console.log(this.greeting + ' ' + name);
    },
};

o.greet('Frank'); // Hello! Frank


function Person2(name, age) {
    return {
        name: name,
        age: age,
        getBirthYear() {
            return (new Date()).getFullYear() - this.age;
        }
    };
}

let bob = new Person2('Bob', 38);
console.log(`Bob was born in ${bob.getBirthYear()}.`);


// `this` in a simple function
console.log('\n\n>>> `this` in a simple function');

function myFunction() {
    console.log(this); // Window
}

myFunction();


let myObject = {
    doSomething() {
        myFunction();
    }
};

myObject.doSomething();


const anotherObject = {
    doSomethingLater() {
        setTimeout(function () {
            this.sayHello() // Error
        }, 1000)
    },
    sayHello() {
        console.log(`Hello, there.`);
    }
};

anotherObject.doSomethingLater();

// `this` in an arrow function
console.log('\n\n>>> `this` in an arrow function');


let o2 = {
    doSomethingLater() {
        setTimeout(() => this.sayHello(), 1000)
    },
    sayHello() {
        console.log(`Hello, am I too late?`)
    }
};

o2.doSomethingLater();

// `this` in an event listener
console.log('\n\n>>> `this` in an event listener');
let button = document.getElementById('myButton');

button.addEventListener('click', function () {
    console.log('clicked: ', this); // button
});