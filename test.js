function fn(str) {
    fn.result = fn.result || '';

    if (str) {
        fn.result += str + ' ';
        return { fn: fn };
    }

    return fn.result;
}

console.log(fn("hello").fn("world").fn("!!!").fn()
);

//console.log(fn('This').fn('is').fn('just').fn('a').fn('test').fn());
