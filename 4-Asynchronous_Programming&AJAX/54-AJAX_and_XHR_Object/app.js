/*
readyState:

0:request not initialized
1:server connection establisdhed
2:request recevied
3:processing request
4:request finished and response is ready

status:

200:OK
403:Forbidden
404:Not Found

*/

// var xhr=new XMLHttpRequest();

// xhr.onreadystatechange=function(){
//     if(xhr.readyState===4 && xhr.status===200){
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('GET','msg.txt',true);
// xhr.send();

//-----------

// var xhr=new XMLHttpRequest();

// xhr.onreadystatechange=function(){
//     if(xhr.readyState===4){
//         if(xhr.status===200){
//             console.log(xhr.responseText);
//         }else if(xhr.status===404){
//             console.log("Kaynak bulunamadı.");
//         }
        
//     }
// }

// xhr.open('GET','msg2.txt',true);
// xhr.send();

//-------------

var xhr=new XMLHttpRequest();

xhr.onreadystatechange=function(){
    if(xhr.readyState===4){
        if(xhr.status===200){
            console.log(xhr.responseText);
        }else if(xhr.status===404){
            console.log("Kaynak bulunamadı.");
        }
        
    }
}

xhr.onprogress=function(){
    console.log("işleniyor");
}

xhr.open('GET','msg.txt',true);
// xhr.open('GET','msg.txt',false);
xhr.send();
//Buraya dikkat işlem arkaplanda ne zaman tamamlanırsa aktif hale geldiği için ilk önce alttaki çalıştı. Eğer asenkron olmasın derseniz ozaman false demeniz gerekecektir. Ancak işlemleri asenkron yapmaya özen gösterin. Asenkron yapıyı yöneterek senkron hale getirmek daha mantıklı bir yoldur. Burada karşımıza Callback, Promise ve Async/Await yapıları çıkacaktır.
console.log("Hoşgeldiniz...");