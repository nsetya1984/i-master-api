const router = require('express').Router()
const investorController = require('../controllers/investor.controller')

router
  .route('/')
  .get(investorController.getSome)
router
  .route('/')
  .post(investorController.create)
router
  .route('/:id')
  .put(investorController.updateById)
router
  .route('/gettotal')
  .get(investorController.getTotal)
router
  .route('/:id')
  .get(investorController.getById)
router
  .route('/')
  .delete(investorController.deleteSome)
router
  .route('/:id')
  .delete(investorController.deleteById)

module.exports = router
