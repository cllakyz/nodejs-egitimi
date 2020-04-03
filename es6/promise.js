/*
const asyncFunc = function (x, callback) {
    const sonuc = x + 3;
    callback(sonuc);
};

asyncFunc(2, function (response) {
    console.log(response);
    asyncFunc(4, function (response) {
        console.log(response);
        asyncFunc(6, function (response) {
            console.log(response);
            asyncFunc(8, function (response) {
                console.log(response);
            });
        });
    });
});*/

const asyncFunc = (x) => {
    return new Promise((resolve, reject) => {
        if (x === 4) {
            resolve('Herşey Yolunda!');
        } else {
            reject('Bir Hata Oluştu!');
        }
    });
};

asyncFunc(4)
    .then((data) => {
        console.log(data);
        return 1;
    })
    .then((data) => {
        console.log(data);
        return 2;
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });