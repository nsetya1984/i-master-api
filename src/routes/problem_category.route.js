
const router = require('express').Router()
const problem_categoryController = require('../controllers/problem_category.controller')
router
  .route('/')
  .get(problem_categoryController.getSome)
router
  .route('/')
  .post(problem_categoryController.create)
router
  .route('/:id')
  .get(problem_categoryController.getById)
router
  .route('/:id')
  .put(problem_categoryController.updateById)
router
  .route('/')
  .delete(problem_categoryController.deleteSome)
router
  .route('/:id')
  .delete(problem_categoryController.deleteById)
module.exports = router

