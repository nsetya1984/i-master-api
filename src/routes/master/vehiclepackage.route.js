const router = require('express').Router()
const vehiclePackageController = require('../../controllers/master/vehiclepackage.controller')
router
  .route('/')
  .get(vehiclePackageController.getSome)
router
  .route('/')
  .post(vehiclePackageController.create)
router
  .route('/:id')
  .get(vehiclePackageController.getById)
router
  .route('/:id')
  .put(vehiclePackageController.updateById)
module.exports = router
