const express=require('express');
const app=express();
const path=require('path');

app.set('view engine','pug');
app.set('views','./views');

const adminRoutes=require('./routes/admin');
const userRoutes=require('./routes/user');

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/admin',adminRoutes);
app.use(userRoutes);

app.use((req,res)=>{
    res.status(404).render('404',{title:'Sayfa Bulunamad─▒'});
});

app.listen(3000,()=>{
    console.log("listening on port 3000");
});