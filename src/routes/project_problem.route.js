
const router = require('express').Router()
const project_problemsController = require('../controllers/project_problem.controller')
router
  .route('/')
  .get(project_problemsController.getSomeJoin)
router
  .route('/someJoin')
  .get(project_problemsController.getSomeJoin)
router
  .route('/')
  .post(project_problemsController.create)
router
  .route('/login')
  .post(project_problemsController.login)
router
  .route('/:id')
  .get(project_problemsController.getById)
router
  .route('/:id')
  .put(project_problemsController.updateById)
router
  .route('/')
  .delete(project_problemsController.deleteSome)
router
  .route('/:id')
  .delete(project_problemsController.deleteById)
module.exports = router

