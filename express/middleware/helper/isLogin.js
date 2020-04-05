const isLogin = (req, res, next) => {
    const isLogin = false;
    if (isLogin)
        next();
    else
        res.send("Lütfen Giriş Yapın");
};

module.exports = isLogin;