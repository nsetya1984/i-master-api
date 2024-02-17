
const router = require('express').Router()
const project_categoryController = require('../controllers/project_category.controller')
router
  .route('/')
  .get(project_categoryController.getSome)
router
  .route('/')
  .post(project_categoryController.create)
router
  .route('/login')
  .post(project_categoryController.login)
router
  .route('/:id')
  .get(project_categoryController.getById)
router
  .route('/:id')
  .put(project_categoryController.updateById)
router
  .route('/')
  .delete(project_categoryController.deleteSome)
router
  .route('/:id')
  .delete(project_categoryController.deleteById)
module.exports = router

