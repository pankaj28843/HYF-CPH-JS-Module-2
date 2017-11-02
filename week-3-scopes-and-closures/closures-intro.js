/**
 * Closures Introduction
 * */


function createAdder(adderValue) {
    function add(number) {
        // String formatting using Template literals
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        console.log(`>> Adding ${adderValue} to ${number}:`);

        return number + adderValue;
    }

    return add;
}


let add_1 = createAdder(1);
console.log(add_1(10)); // 11
console.log(add_1(-3)); // -2


let add_5 = createAdder(5);
console.log(add_5(5)); // 10
console.log(add_5(20)); // 25


let subtract_5 = createAdder(-5);
console.log(subtract_5(20)); // 15
console.log(subtract_5(30)); // 25






function createWallet() {
    let value = null;


    return {
        store: function (something) {
            value = somehting;
        },
        get: function () {
            return value;
        }
    }
}

let wallet = createWallet();
wallet.store(25);
wallet.get(); // 25;

wallet.store('Some name');
wallet.get(); //

