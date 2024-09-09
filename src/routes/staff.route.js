
const router = require('express').Router()
const staffController = require('../controllers/staff.controller')
router
  .route('/')
  .get(staffController.getSome)
router
  .route('/')
  .post(staffController.create)
router
  .route('/:id')
  .put(staffController.updateById)
router
  .route('/')
  .delete(staffController.deleteSome)
router
  .route('/:id')
  .delete(staffController.deleteById)
router
  .route('/:id')
  .get(staffController.getById)
module.exports = router



