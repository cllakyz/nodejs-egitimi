const express = require('express');
const app = express();

/* Routers */
const user = require('./routes/user');
const profile = require('./routes/profile');

/* Helpers */
/*const isLogin = require('./helper/isLogin');

app.use(isLogin);*/

app.use('/user', user);
app.use('/profile', profile);

app.listen(3000, () => {
    console.log('express server çalıştı.');
});