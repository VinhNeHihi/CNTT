const Users = require('../models/UserModels')
const crypto = require('crypto')
const md5sum = crypto.createHash('md5');
class updateUserController{

    //GET /signup
    show(req, res){
        Users.getIDUser(1, (isValid) => {
            if(isValid)
            {
                
                res.render('updateUser', {
                    id: isValid,
                    isManage: true
                 })
            }
            else
            {
                res.send("Don't have user")
            }
        })
    }
    update(req, res){
        var salt = crypto.createHash('md5').update(req.body.password).digest('hex')
        const user = {
            name: req.body.name,
            gender: req.body.optradio,
            phone_number: req.body.phoneNumber,
            email: req.body.email,
            password: salt,
            avatar: req.body.avatar,
            id: req.body.id
        }
        
        Users.update(user, (item)=> {
            console.log(item)
                if(item == "0" )
                {
                   res.send("Fail")
                }
                else{
                    res.render('admin',{
                        isAdmin: true
                     })
                }
        })
    }
}
module.exports = new updateUserController