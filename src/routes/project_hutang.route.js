
const router = require('express').Router()
const project_hutangController = require('../controllers/project_hutang.controller')
router
  .route('/')
  .get(project_hutangController.getSome)
router
  .route('/')
  .post(project_hutangController.create)

router
  .route('/:id')
  .put(project_hutangController.updateById)
router
  .route('/')
  .delete(project_hutangController.deleteSome)
router
  .route('/:id')
  .delete(project_hutangController.deleteById)
router
  .route('/gettotal')
  .get(project_hutangController.getTotal)
router
  .route('/getjumlah')
  .get(project_hutangController.getJumlah)

router
  .route('/gettotalbycategori')
  .get(project_hutangController.getTotalByCategori)
router
  .route('/gettotalbypj')
  .get(project_hutangController.getTotalByPj)
router
  .route('/kategori/:kategori_id/gettotal')
  .get(project_hutangController.getTotalFilter)
router
  .route('/:id')
  .get(project_hutangController.getById)
module.exports = router

