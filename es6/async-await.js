const user = {
    id: 10,
    name: 'celal',
};

const friends = [
    {
        id: 11,
        name: 'engin',
    },
    {
        id: 12,
        name: 'berat',
    }
];

const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user);
        }, 500);
    });
};

const getFriends = (userId) => {
    return new Promise((resolve, reject) => {
        if(!userId)
            reject("Bir hata oluştu");
        setTimeout(() => {
            resolve(friends);
        }, 1000);
    });
};

// callback hell
/*
let userId;
getUser()
    .then(function (user) {
        userId = user.id;
        getFriends(userId)
            .then(function (friends) {
                console.log(user);
                console.log(friends);
            });
    });*/

// promise chain
/*
getUser()
    .then((user) => {
        return getFriends(user.id);
    })
    .then((friends) => {
        console.log(friends);
    });
*/

// async / await
async function asyncFunc() {
    try {
        console.log('User servisi başladı');
        const userData = await getUser();
        console.log('User servisi tamamlandı');

        console.log('Friends servisi başladı');
        const friendsData = await getFriends(userData.id);
        console.log('Friends servisi tamamlandı');

        console.log('Data: ', {userData, friendsData});
    } catch (error) {
        console.log(error);
    }
}

asyncFunc();