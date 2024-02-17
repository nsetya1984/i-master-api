const router = require('express').Router()
const itemPendapatanController = require('../controllers/itempendapatan.controller')

router
  .route('/')
  .get(itemPendapatanController.getSome)
router
  .route('/')
  .post(itemPendapatanController.create)
router
  .route('/:id')
  .put(itemPendapatanController.updateById)
router
  .route('/gettotal')
  .get(itemPendapatanController.getTotal)
router
  .route('/:id')
  .get(itemPendapatanController.getById)
router
  .route('/')
  .delete(itemPendapatanController.deleteSome)
router
  .route('/:id')
  .delete(itemPendapatanController.deleteById)

module.exports = router
