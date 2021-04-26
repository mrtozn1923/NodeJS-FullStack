const express=require('express');
const app=express();

const adminRoutes=require('./routes/admin');
const userRoutes=require('./routes/user');

app.use(express.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use(userRoutes);


app.listen(3000,()=>{
    console.log("listening on port 3000");
});