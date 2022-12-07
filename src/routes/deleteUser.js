const express = require('express')
const router = express.Router()

const deleteUserController = require('../app/controllers/deleteUserController')


router.post('/',deleteUserController.delete)
router.get('/', deleteUserController.show)

module.exports = router