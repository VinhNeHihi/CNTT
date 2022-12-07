const express = require('express')
const router = express.Router()

const GeneraltablesController = require('../app/controllers/GeneraltablesController')

router.get('/', GeneraltablesController.show)

module.exports = router