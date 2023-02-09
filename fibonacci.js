// Iterative solution
function fibs(n) {
    // Declare an array to return
    let fibArray = [];
    if (n == 0) {
        return fibArray;
    }
    if (n >= 1) {
        fibArray.push(0);
    }
    if (n >= 2) {
        fibArray.push(1);
    }
    for (let i = 2; i < n; i++){
        fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
    }
    return fibArray;
}

console.log('ITERATIVE SOLUTION');
console.log('------------------');
console.log(`The first 0 Fibonacci numbers are: ${fibs(0)}`); // []
console.log(`The first 1 Fibonacci numbers are: ${fibs(1)}`); // [0]
console.log(`The first 2 Fibonacci numbers are: ${fibs(2)}`); // [0, 1]
console.log(`The first 3 Fibonacci numbers are: ${fibs(3)}`); // [0, 1, 1]
console.log(`The first 8 Fibonacci numbers are: ${fibs(8)}`); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(`The first 11 Fibonacci numbers are: ${fibs(11)}`); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Recursive solution
function fibsRec(n) {
    let fibArray = [];
    // Base case
    if (n == 0) {
        return fibArray;
    }
    if (n == 1) {
        fibArray.push(0);
        return fibArray;
    }
    if (n == 2) {
        fibArray.push(0,1);
        return fibArray;
    }
    // Recursive Call
    fibArray = fibArray.concat(fibsRec(n - 1),fibsRec(n - 1)[fibsRec(n - 1).length - 1] + fibsRec(n - 1)[fibsRec(n - 1).length - 2]);
    return fibArray;
}

console.log('');
console.log('RECURSIVE SOLUTION');
console.log('------------------');
console.log(`The first 0 Fibonacci numbers are: ${fibsRec(0)}`); // []
console.log(`The first 1 Fibonacci numbers are: ${fibsRec(1)}`); // [0]
console.log(`The first 2 Fibonacci numbers are: ${fibsRec(2)}`); // [0, 1]
console.log(`The first 3 Fibonacci numbers are: ${fibsRec(3)}`); // [0, 1, 1]
console.log(`The first 8 Fibonacci numbers are: ${fibsRec(8)}`); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(`The first 11 Fibonacci numbers are: ${fibsRec(11)}`); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]