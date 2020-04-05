const express = require('express');
const app = express();

app.set('view engine', 'pug');

/* Routers */
const user = require('./routes/user');
const profile = require('./routes/profile');

/* Helpers */
/*const isLogin = require('./helper/isLogin');

app.use(isLogin);*/

app.use('/user', user);
app.use('/profile', profile);

app.use((err, req, res, next) => {
    res.status(err.status);
    res.render('error', {
        message: err.message,
        status: err.status,
    });
});

app.listen(3000, () => {
    console.log('express server çalıştı.');
});