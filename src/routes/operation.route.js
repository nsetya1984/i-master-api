const router = require('express').Router()
const operationController = require('../controllers/operation.controller')

router
  .route('/')
  .get(operationController.getSome)
router
  .route('/operation/:outlet_id')
  .get(operationController.getSomeByOutletId)
router
  .route('/operationperiode/:outlet_id/periode/:periode_id')
  .get(operationController.getSomeByOutletIdPeriodeId)
router
  .route('/')
  .post(operationController.create)
router
  .route('/:id')
  .put(operationController.updateById)
router
  .route('/gettotal')
  .get(operationController.getTotal)
router
  .route('/:id')
  .get(operationController.getById)
router
  .route('/')
  .delete(operationController.deleteSome)
router
  .route('/:id')
  .delete(operationController.deleteById)

module.exports = router
