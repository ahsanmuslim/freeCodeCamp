const sum = (...args) => args.reduce((a, b=0) => a + b, 0 );

console.log(sum(2,3,5));
console.log(sum(10));
console.log(sum());