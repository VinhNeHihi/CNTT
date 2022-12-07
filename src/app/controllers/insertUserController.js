const Users = require('../models/UserModels')
const crypto = require('crypto')
const md5sum = crypto.createHash('md5');
class insertUserController{

    //GET /signup
    show(req, res){
        res.render('insertUser', {
          isManage: true 
        })
    }
    insert(req,res){
        var salt = crypto.createHash('md5').update(req.body.password).digest('hex')
        const user = {
            name: req.body.name,
            gender: req.body.optradio,
            phone_number: req.body.phoneNumber,
            email: req.body.email,
            password: salt,
            avatar: req.body.avatar
        }
        Users.insert(user, (item)=> {
            console.log(item)
            if(item == "0" )
                {
                   res.send("Fail")
                }
                else{
                    isManage: true
                    res.render('generalTables',{
                        isAdmin: true
                     })
                }
        })
}
}
module.exports = new insertUserController