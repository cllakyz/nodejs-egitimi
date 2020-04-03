/*
const arr = ['foo', 'bar', 'xyz'];
console.log(...arr);*/

/*
const data = [1, 2, 3];
//const data2 = [data, 4, 5, 6];
const data2 = [...data, 4, 5, 6];

console.log(data2);*/

const arr = ['a', 'b', 'c', 'd'];
const [deger1, deger2, ...rest] = arr;

console.log(rest);