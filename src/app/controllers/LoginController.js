const Users = require('../models/UserModels')
const crypto = require('crypto')
const md5sum = crypto.createHash('md5');
class LoginController{

    //GET /login
    show(req, res){
        res.render('login')
    }
    login(req,res){
       var salt = crypto.createHash('md5').update(req.body.password).digest('hex')
       console.log(salt)
        const user = {
            email: req.body.email,
            password: salt
        }
        Users.Checkuser(user, (isValid)=> {
            console.log(isValid)
            if(isValid.length == 1 )
                {
                    res.redirect('/admin')
                }
                else{
                    res.send('Fail')
                }

            // res.render('login', {
            //     email: items[0],
            //     password: item[1]
            // })
        })
    // admin(req, res){
    //     res.render('admin')
    // }
}
}
module.exports = new LoginController