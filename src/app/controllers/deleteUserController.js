const Users = require('../models/UserModels')
const crypto = require('crypto')
const md5sum = crypto.createHash('md5');
class deleteUserController{

    //GET /signup
    show(req, res){
        Users.getIDUser(1, (item) => {
            if(item == 0)
            {
                res.send("Don't have user")
            }
            else
            {
            res.render('deleteUser', {
                id: item,
                isManage: true
             })
            }
        })
    }
    delete(req, res){
        const user = {
            id: req.body.id
        }
        Users.delete(user, (item)=> {
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
module.exports = new deleteUserController