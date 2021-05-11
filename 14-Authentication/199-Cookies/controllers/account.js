exports.getLogin=(req,res,next)=>{
    res.render('account/login',{
        path:'/login',
        title:'Giriş Yap'
    });
}

exports.postLogin=(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
    if((email=='mert@gmail.com') && (password=='1234')){
        res.cookie('isAuthenticated',true);
        res.redirect('/');
    }else{
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