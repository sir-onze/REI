const jwt = require ('jsonwebtoken');

module.exports=function verify(req,res,next){
    const token = req.header('token');
    //verificar se o token está presente no header
    if(!token){
        return res.status(401).send('Não autorizado')
    }
    //verificar se o token é valido para o segredo definido
    try{
        const verify = jwt.verify(token,"JWT WORKS")
        req.user = verify;
        next();
    }
    catch(err){
        res.status(400).send("Token inválido")
    }
}

