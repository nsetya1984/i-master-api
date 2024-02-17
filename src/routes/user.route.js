const router = require('express').Router()
const userController = require('../controllers/user.controller')
router
  .route('/')
  .get(userController.getSome)
router
  .route('/')
  .post(userController.create)
router
  .route('/login')
  .post(userController.login)
router
  .route('/:id')
  .get(userController.getById)
router
  .route('/:id')
  .put(userController.updateById)
router
  .route('/')
  .delete(userController.deleteSome)
router
  .route('/:id')
  .delete(userController.deleteById)
module.exports = router
