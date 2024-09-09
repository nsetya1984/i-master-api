
const router = require('express').Router()
const zonController = require('../controllers/zon.controller')
router
  .route('/')
  .get(zonController.getSome)
router
  .route('/')
  .post(zonController.create)
router
  .route('/:id')
  .put(zonController.updateById)
router
  .route('/')
  .delete(zonController.deleteSome)
router
  .route('/:id')
  .delete(zonController.deleteById)
router
  .route('/:id')
  .get(zonController.getById)
module.exports = router



