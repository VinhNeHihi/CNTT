class AdminController{

    //GET /contact
    show(req, res){
        res.render('admin', {
            isAdmin: true,
        })
    }
    generalTables(req,res){
        res.render('generalTables',{
            isAdmin: true,
        })
    }
}

module.exports = new AdminController;