
const router = require('express').Router()
const project_hutang_problemController = require('../controllers/project_hutang_problem.controller')
router
  .route('/')
  .get(project_hutang_problemController.getSomeJoin)
router
  .route('/someJoin')
  .get(project_hutang_problemController.getSomeJoin)
router
  .route('/')
  .post(project_hutang_problemController.create)
router
  .route('/gettotal')
  .get(project_hutang_problemController.getTotal)
router
  .route('/kategori/:kategori_id/gettotal')
  .get(project_hutang_problemController.getTotalFilter)
router
  .route('/gettotalbycategori')
  .get(project_hutang_problemController.getTotalByCategori)
router
  .route('/kategori/:kategori_id/gettotalbycategori')
  .get(project_hutang_problemController.getTotalByCategoriFilter)

router
  .route('/:id')
  .get(project_hutang_problemController.getById)
router
  .route('/:id')
  .put(project_hutang_problemController.updateById)
router
  .route('/')
  .delete(project_hutang_problemController.deleteSome)
router
  .route('/:id')
  .delete(project_hutang_problemController.deleteById)
module.exports = router

