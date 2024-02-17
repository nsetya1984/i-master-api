const router = require('express').Router()
const userroleController = require('../controllers/userrole.controller')
router
  .route('/')
  .get(userroleController.getSome)
router
  .route('/')
  .post(userroleController.create)
router
  .route('/:id')
  .get(userroleController.getById)
router
  .route('/:id')
  .put(userroleController.updateById)
router
  .route('/')
  .delete(userroleController.deleteSome)
router
  .route('/:id')
  .delete(userroleController.deleteById)
module.exports = router
