const router = require('express').Router()
const driverController = require('../controllers/driver.controller')
router
  .route('/')
  .get(driverController.getSome)
router
  .route('/')
  .post(driverController.create)
router
  .route('/:id')
  .get(driverController.getById)
router
  .route('/:id')
  .put(driverController.updateById)
router
  .route('/')
  .delete(driverController.deleteSome)
router
  .route('/:id')
  .delete(driverController.deleteById)
module.exports = router
