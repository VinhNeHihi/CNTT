const Users = require("../models/UserModels");

class GeneraltablesController{

    //GET
    show(req, res){
        Users.Getusers(1, (item) => {
        if(item == 0)
        {
            res.send("Don't have user")
        }
        else
        {
        res.render('generalTables', {
            user: item[0],
            product: item[1],
            isAdmin: true
         })
        }
    })
    //Products
        // Users.Getproducts(1, (item) => {
        //     if(item == 0)
        // {
        //     res.send("Don't have user")
        // }
        // else
        // {
        // res.render('generalTables', {
        //     product: item,
        //     isAdmin: true
        // })
        // }
        // })

        
}
}
module.exports = new GeneraltablesController;