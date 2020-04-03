const data = {
    deger1: 'deger1',
    deger2: 'deger2',
    deger3: {
        ad: 'celal'
    },
};

/*const deger1 = data.deger1;
const deger2 = data.deger2;*/

//const {deger1, deger2, deger3, deger4 = 'deger4'} = data;
//console.log(deger1, deger2, deger3, deger4);

const {deger3: {ad: name}} = data;
console.log(name);

/*
const data = [1, 2, 3];
const [deger1, deger2, deger3] = data;

console.log(deger1, deger2, deger3);*/
