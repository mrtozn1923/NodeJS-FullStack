module.exports=(req,res,next)=>{
    console.log(req.session);
    if(!req.session.isAuthenticated){
        req.session.redirectTo=req.url;
        return res.redirect('/login');
    }
    next();
}