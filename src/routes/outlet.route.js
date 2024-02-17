const router = require('express').Router()
const outletController = require('../controllers/outlet.controller')

router
  .route('/')
  .get(outletController.getSome)
router
  .route('/')
  .post(outletController.create)
router
  .route('/:id')
  .put(outletController.updateById)
router
  .route('/gettotal')
  .get(outletController.getTotal)
router
  .route('/:id')
  .get(outletController.getById)
router
  .route('/getwithreference/:id')
  .get(outletController.getwithreference)
router
  .route('/')
  .delete(outletController.deleteSome)
router
  .route('/:id')
  .delete(outletController.deleteById)

module.exports = router
