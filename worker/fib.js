exports.fib = (num) => {
    if(parseInt(num) > 40) return 'Number too big..';
    if(parseInt(num) < 2) return 1;

    return this.fib(parseInt(num)-1) + this.fib(parseInt(num)-2)
}