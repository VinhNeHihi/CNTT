const express = require('express')
const router = express.Router()

const insertUserController = require('../app/controllers/insertUserController')


router.post('/',insertUserController.insert )
router.get('/', insertUserController.show)

module.exports = router