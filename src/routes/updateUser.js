const express = require('express')
const router = express.Router()

const updateUserController = require('../app/controllers/updateUserController')


router.post('/',updateUserController.update)
router.get('/', updateUserController.show)

module.exports = router