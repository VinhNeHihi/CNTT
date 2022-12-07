const db = require('../../config/db')
const Users = function(Users){
    this.id = Users.id
    this.name = Users.name
    this.gender = Users.gender
    this.phone_number = Users.phone_number
    this.email = Users.email
    this.password = Users.email
    this.avatar = Users.avatar
}
Users.Checkuser = (user, callback) => {
    db.query("select  email, password from users where users.email = ? and users.password = ?", [user.email, user.password], (err, isUser) => {
        if (err){
            console.log(err)
            callback(null)
        }
        else{
            callback(isUser)
        }
    })
}
Users.Getusers = (user, callback) =>{
    db.query("select id, name, gender, phone_number, email from users; select products.id as id, products.name as name, products.qty_in_stock as amount, brands.brand as brand, genders.gender"
    +" from products inner join brands on products.brand_id = brands.id"
    +" inner join genders on products.gender_id = genders.id", (err, item) => {
        if (err){
            console.log(err)

            callback(null)
        }
        else{
            callback(item)
        }
    })
}
Users.Getproducts = (product, callback) => {
    db.query("select products.id as id, products.name as name, products.qty_in_stock as amount, brands.brand as brand, genders.gender"
    +" from products inner join brands on products.brand_id = brands.id"
    +" inner join genders on products.gender_id = genders.id", (err, item) => {
        if (err){
            console.log(err)
            callback(null)
        }
        else{
            callback(item)
        }
    })
}
Users.insert = (user, callback) => {
    db.query("insert into users(name,gender, phone_number, email, password, avatar)"
     +"values(?,?,?,?,?,?)", [user.name,user.gender, user.phone_number, user.email, user.password, user.avatar], (err, item) =>{
        if(err){
     console.log(err)
            callback("0")
        }
        else{
            callback("1")
        }
    })
}
Users.insert = (user, callback) => {
    db.query("insert into users(name,gender, phone_number, email, password, avatar)"
     +"values(?,?,?,?,?,?)", [user.name,user.gender, user.phone_number, user.email, user.password, user.avatar], (err, item) =>{
        if(err){
     console.log(err)
            callback("0")
        }
        else{
            callback("1")
        }
    })
}
Users.delete = (user, callback) => {
    db.query(" delete from users where id = ? ", [user.id], (err, item) =>{
        if(err){
            console.log(err)
            callback("0")
        }
        else{
            callback("1")
        }
    })
}
Users.update = (user, callback) => {
    db.query("UPDATE users SET name = ?,gender = ?, phone_number = ?, email = ?, password = ?, avatar = ? WHERE id = ?"
    , [user.name,user.gender, user.phone_number, user.email, user.password, user.avatar, user.id], (err, item) =>{
        if(err){
            console.log(err)
            callback("0")
        }
        else{
            callback("1")
        }
    })
}
Users.getIDUser = (user, callback) =>{
    db.query("select id from users", (err, item) => {
        if(err)
        callback("null")
        else{
            callback(item)
            console.log(item)
        }
    })
}
module.exports = Users