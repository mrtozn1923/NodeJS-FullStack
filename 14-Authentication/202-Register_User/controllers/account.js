const User=require('../models/user')

exports.getLogin=(req,res,next)=>{
    res.render('account/login',{
        path:'/login',
        title:'Giriş Yap',
        isAuthenticated:req.session.isAuthenticated
    });
}

exports.postLogin=(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
    if((email=='mert@gmail.com') && (password=='1234')){
        // res.cookie('isAuthenticated',true);
        req.session.isAuthenticated=true;
        res.redirect('/');
    }else{
        res.redirect('/login');
    }
}

exports.getRegister=(req,res,next)=>{
    res.render('account/register',{
        path:'/register',
        title:'Kayıt Ol',
        isAuthenticated:req.session.isAuthenticated
    });
}

exports.postRegister=(req,res,next)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;

    User.findOne({email:email})
        .then(user=>{
            if(user){
                return res.redirect('/register');
            }
            const newUser=new User({
                name:name,
                email:email,
                password:password,
                cart:{items:[]}
            });
            return newUser.save()
        })
        .then(()=>{
            res.redirect('/login');
        }).catch(err=>{
            console.log(err);
        })
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