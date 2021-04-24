//https://nodejs.org/dist/latest-v14.x/docs/api/events.html

// const EventEmitter=require('events');
// const emitter=new EventEmitter();
/*
//listener kayıt et
emitter.on('connection',function(){
    console.log('bağlantı kuruldu.');
});
//event'i tetikle
emitter.emit('connection');
*/
/*
emitter.on('connection',function(args){
    console.log('bağlantı kuruldu.',args);
});

emitter.emit('connection',{id:10,message:'deneme'});
*/

//--------------------------------

const Logger=require('./logger');
const logger=new Logger();

//listener kayıt et
logger.on('connection',function(args){
    console.log('bağlantı kuruldu',args);
});
logger.log('Mert Özen giriş yaptı.');