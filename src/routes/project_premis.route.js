
const router = require('express').Router()
const project_premisController = require('../controllers/project_premis.controller')
router
  .route('/')
  .get(project_premisController.getSome)
router
  .route('/')
  .post(project_premisController.create)
router
  .route('/login')
  .post(project_premisController.login)
router
  .route('/:id')
  .get(project_premisController.getById)
router
  .route('/:id')
  .put(project_premisController.updateById)
router
  .route('/')
  .delete(project_premisController.deleteSome)
router
  .route('/:id')
  .delete(project_premisController.deleteById)
module.exports = router

