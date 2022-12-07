const express = require('express')
const router = express.Router()

const AdminController = require('../app/controllers/AdminController')

router.use('/', AdminController.UsersTable)

module.exports = router