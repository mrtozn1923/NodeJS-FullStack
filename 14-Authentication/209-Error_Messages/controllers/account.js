const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.getLogin = (req, res, next) => {
    var errorMessage = req.session.errorMessage;
    delete req.session.errorMessage;
    res.render('account/login', {
        path: '/login',
        title: 'Giriş Yap',
        errorMessage: errorMessage
    });
}

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                req.session.errorMessage = "Kullanıcı adı veya şifre yanlış.";
                req.session.save(function(err) {
                    console.log(err);
                    return res.redirect('/login');
                });
            }
            bcrypt.compare(password, user.password)
                .then(isSuccess => {
                    if (isSuccess) {
                        req.session.user = user;
                        req.session.isAuthenticated = true;
                        return req.session.save(function() {
                            var url = req.session.redirectTo || '/';
                            delete req.session.redirectTo;
                            res.redirect(url);
                        })
                    }
                    req.session.errorMessage = "Kullanıcı adı veya şifre yanlış.";
                    req.session.save(function(err) {
                        console.log(err);
                        return res.redirect('/login');
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getRegister = (req, res, next) => {
    var errorMessage = req.session.errorMessage;
    delete req.session.errorMessage;
    res.render('account/register', {
        path: '/register',
        title: 'Kayıt Ol',
        errorMessage: errorMessage
    });
}

exports.postRegister = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then(user => {
            if (user) {
                req.session.errorMessage = "Bu e-posta adresi sistemde zaten kayıtlıdır.";
                req.session.save(function(err) {
                    console.log(err);
                    return res.redirect('/register');
                });
            }
            return bcrypt.hash(password, 10);
        })
        .then((hashedPassword) => {
            const newUser = new User({
                name: name,
                email: email,
                password: hashedPassword,
                cart: { items: [] }
            });
            return newUser.save()
        })
        .then(() => {
            res.redirect('/login');
        }).catch(err => {
            console.log(err);
        })
}

exports.getReset = (req, res, next) => {
    res.render('account/reset', {
        path: '/reset',
        title: 'Şifreyi Sıfırla'
    });
}

exports.postReset = (req, res, next) => {
    res.redirect('/login');
}

exports.getLogout = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
}