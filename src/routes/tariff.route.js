const router = require('express').Router()
const tariffController = require('../controllers/tariff.controller')

router
  .route('/')
  .get(tariffController.getSome)
router
  .route('/')
  .post(tariffController.create)
router
  .route('/:id')
  .put(tariffController.updateById)
router
  .route('/:id')
  .get(tariffController.getById)
module.exports = router
