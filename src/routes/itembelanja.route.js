const router = require('express').Router()
const itemBelanjaController = require('../controllers/itembelanja.controller')

router
  .route('/')
  .get(itemBelanjaController.getSome)
router
  .route('/')
  .post(itemBelanjaController.create)
router
  .route('/:id')
  .put(itemBelanjaController.updateById)
router
  .route('/gettotal')
  .get(itemBelanjaController.getTotal)
router
  .route('/:id')
  .get(itemBelanjaController.getById)
router
  .route('/')
  .delete(itemBelanjaController.deleteSome)
router
  .route('/:id')
  .delete(itemBelanjaController.deleteById)

module.exports = router
