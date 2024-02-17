const router = require('express').Router()
const vehicleController = require('../controllers/vehicle.controller')

router
  .route('/')
  .get(vehicleController.getSome)
router
  .route('/')
  .post(vehicleController.create)
router
  .route('/:id')
  .put(vehicleController.updateById)
router
  .route('/gettotal')
  .get(vehicleController.getTotal)
router
  .route('/getrebanbystatus')
  .get(vehicleController.getRebanByStatus)
router
  .route('/:id')
  .get(vehicleController.getById)
router
  .route('/')
  .delete(vehicleController.deleteSome)
router
  .route('/:id')
  .delete(vehicleController.deleteById)

module.exports = router
