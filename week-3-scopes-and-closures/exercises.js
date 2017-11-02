//
/*
* Implement a counter with following methods using closures
*
* counter =  getCounter();
* counter.get(); // 0
* counter.increase();
* counter.get(1);
* counter.decrease();
* counter.reset();
* */



// Solution

function getCounter() {
    let a = 0;
    return {
        increase: function () {
            a = a + 1;
        },
        decrease: function () {
            a = a - 1;
        },
        get: function () {
            return a;
        },
        reset: function () {
            a = 0;
        }
    }
}
