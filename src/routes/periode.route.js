const router = require('express').Router()
const periodeController = require('../controllers/periode.controller')

router
  .route('/')
  .get(periodeController.getSome)
router
  .route('/')
  .post(periodeController.create)
router
  .route('/:id')
  .put(periodeController.updateById)
router
  .route('/gettotal')
  .get(periodeController.getTotal)
router
  .route('/:id')
  .get(periodeController.getById)
router
  .route('/')
  .delete(periodeController.deleteSome)
router
  .route('/:id')
  .delete(periodeController.deleteById)

module.exports = router
