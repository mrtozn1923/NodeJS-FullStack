const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');

const mongoose = require('mongoose');

const errorController = require('./controllers/errors');

const User = require('./models/user');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findOne({name:'mert'})
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => { console.log(err) });
})

//routes
app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use(errorController.get404Page);


mongoose.connect('mongodb://localhost/node-app')
    .then(() => {
        console.log('connected to mongodb');

        User.findOne({ name: 'mert' })
            .then(user => {
                if (!user) {
                    user = new User({
                        name: 'mert',
                        email: 'mert@gmail.com',
                        cart: {
                            items: []
                        }
                    })
                    return user.save();
                }
                return user;
            })
            .then(() => {
                app.listen(3000);
            })
            .catch(err => console.log(err));
    })
    .catch(err => {
        console.log(err);
    })