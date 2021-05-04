const Sequelize=require('sequelize'); //class döndürür
const sequelize=new Sequelize('nodejs','root',
'root',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;