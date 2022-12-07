const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewController')

router.get('/:slug', newsController.detail)
router.get('/', newsController.getBrand)


module.exports = router