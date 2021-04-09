//Temel Obje->Error
//ReferenceError
//TypeError
//SyntaxError
//URIError

// try {
//     myFunction();
// } catch (e) {
//     console.log(e);
//     console.log(e.message);
//     console.log(e.name);
//     console.log(e instanceof ReferenceError);
//     console.log(e instanceof TypeError);
//     console.log(typeof e);
// }

//Hata Fırlatma

var user={
    name:'Mert'
}
try {
    console.log(user.name);
    if(!user.email){
        throw new Error('User has no email');
    }
} catch (e) {
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);
    console.log(typeof e);
}finally{
    //Hata olsada olmasada çalışacak kodlar
}