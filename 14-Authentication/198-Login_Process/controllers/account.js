exports.getLogin=(req,res,next)=>{
    res.render('account/login',{
        path:'/login',
        title:'Giriş Yap'
    });
}

exports.postLogin=(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
    //burada isAuthenticated bildirilse dahi her istekte temizlenecektir
    //bu nedenle cookie ve session yapılarından yararlanmalıyız. 
    if((email=='mert@gmail.com') && (password=='1234')){
        req.isAuthenticated=true;
        res.redirect('/');
    }else{
        req.isAuthenticated=false;
        res.redirect('/login');
    }
}

exports.getRegister=(req,res,next)=>{
    res.render('account/register',{
        path:'/register',
        title:'Kayıt Ol'
    });
}

exports.postRegister=(req,res,next)=>{
    res.redirect('/login');
}

exports.getReset=(req,res,next)=>{
    res.render('account/reset',{
        path:'/reset',
        title:'Şifreyi Sıfırla'
    });
}

exports.postReset=(req,res,next)=>{
    res.redirect('/');
}