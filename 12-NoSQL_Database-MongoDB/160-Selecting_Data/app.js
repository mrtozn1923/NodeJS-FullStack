const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');

const errorController = require('./controllers/errors');
const mongoConnect=require('./utility/database').mongoConnect;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use(errorController.get404Page);

mongoConnect(()=>{
    app.listen(3000);
});