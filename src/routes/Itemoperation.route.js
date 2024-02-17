const router = require('express').Router()
const itemoperationController = require('../controllers/itemoperation.controller')

router
  .route('/')
  .get(itemoperationController.getSome)
router
  .route('/')
  .post(itemoperationController.create)
router
  .route('/:id')
  .put(itemoperationController.updateById)
router
  .route('/gettotal')
  .get(itemoperationController.getTotal)
router
  .route('/:id')
  .get(itemoperationController.getById)
router
  .route('/')
  .delete(itemoperationController.deleteSome)
router
  .route('/:id')
  .delete(itemoperationController.deleteById)

module.exports = router
