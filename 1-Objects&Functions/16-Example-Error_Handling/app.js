document.getElementById("btn-submit").addEventListener("click",function(e){
    var name=document.getElementById("name");
    var age=document.getElementById("age");
    var errors=document.getElementById("errors");
    errors.innerHTML="";
    try{
        if(name.value.length===0){
            throw new Error("Ad gereklidir.");
        }
        if(name.value.length>20){
            throw new Error("Ad çok uzun.");
        }
        if(age.value.length===0){
            throw new Error("Yaş gereklidir.");
        }
        if(isNaN(age.value)){
            throw new Error("Yaş sayısal bir değer olmalıdır.");
        }
        alert("Form gönderildi.");
    }catch(err){
        // errors.innerHTML=err;
        errors.innerHTML=err.message;
    }finally{
        name.value="";
        age.value="";
    }

    e.preventDefault();
});