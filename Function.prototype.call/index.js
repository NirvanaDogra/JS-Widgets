/*
Implement your own Function.prototype.call without calling the native call method. 
To avoid overwriting the actual Function.prototype.call, 
implement the function as Function.prototype.myCall.
*/


function multiplyAge(multiplier = 1) {

    return this.age * multiplier;
}

const mary = {
    age: 21,
};

const john = {
    age: 42,
};

Function.prototype.myCall = function (argThis, ...args) {
    console.group("call")
    const context = argThis || globalThis
    console.log(context)
    context["myContext"] = this
    const result = context["myContext"](...args)
    console.log(context)
    delete context['myContext']
    console.groupEnd("call")
    return result

};

// console.log(multiplyAge.myCall(mary));
// console.log(multiplyAge.myCall(john, 2));



function minBy(array, iteratee) {
    if (array.length === 0) {
        return undefined;
    }

    let minValue = array[0];
    let result;

    array.forEach((it) => {
        const value = iteratee(it);
        if (value === undefined || value === null) {
            return;
        }
        console.log("value", value)
        if (value < minValue) {
            minValue = value;
            result = it;
            console.log(result)
        }
    });

    return result;
}


// console.log(minBy([2, 3, 1, 4], (num) => num));
// console.log(minBy([{ n: 1 }], (o) => o.n))
// console.log("out", minBy(['apricot', 'pear', 'apple', 'banana'], (fruit) => fruit));

/*

Array.prototype.reduce is a way of "reducing" elements in an array by calling a "reducer" callback function on each element of the array in order, 
passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
Implement Array.prototype.reduce. To avoid overwriting the actual Array.prototype.reduce which is being used by the autograder, we shall instead implement it as Array.prototype.myReduce.


*/


Array.prototype.myReduce = function (callbackFn, initialValue) {
    console.log(callbackFn)
    let init = initialValue
    for (let i = 0; i < this.length; i++) {
        let next = this[i]
        console.log(next, i, init)
        init = callbackFn(init, next, i, this)
    }
    return init
};

// console.log([1, 3, 4, 5].myReduce((prev, curr) => prev + curr, 0))
// console.log([-4, 10].myReduce((prev, curr) => prev + curr, 0))


function cycle(...values) {
    let i = 0
    console.log(values, values.length)
    return function() {
        let current = values[i]
        i = (i + 1) % values.length
        return current
    }
}

// const onOffFn = cycle('on', 'off');
// console.log(onOffFn()); // "on"
// console.log(onOffFn()); // "off"
// console.log(onOffFn()); // "on"