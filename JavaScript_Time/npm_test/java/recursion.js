function fact(n) {
    if (n === 1) {
        return n;
    } else {
        return n * fact(n - 1);
    }
}

console.log(fact(5));

function fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

console.log(fib(5));