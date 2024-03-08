
const router = require('express').Router()
const project_hutang_keuanganController = require('../controllers/project_hutang_keuangan.controller')
router
  .route('/')
  .get(project_hutang_keuanganController.getSome)
router
  .route('/')
  .post(project_hutang_keuanganController.create)
router
  .route('/login')
  .post(project_hutang_keuanganController.login)
router
  .route('/gettotal')
  .get(project_hutang_keuanganController.getTotal)
router
  .route('/gettotalbycategori')
  .get(project_hutang_keuanganController.getTotalByCategori)
router
  .route('/kategori/:kategori_id/gettotal')
  .get(project_hutang_keuanganController.getTotalFilter)
router
  .route('/gettotaldaily')
  .get(project_hutang_keuanganController.getTotalDaily)
router
  .route('/kategori/:kategori_id/gettotaldaily')
  .get(project_hutang_keuanganController.getTotalDailyFilter)
router
  .route('/kategori/:kategori_id/gettop')
  .get(project_hutang_keuanganController.getTopFilter)
router
  .route('/:id')
  .get(project_hutang_keuanganController.getById)
router
  .route('/:id')
  .put(project_hutang_keuanganController.updateById)
router
  .route('/')
  .delete(project_hutang_keuanganController.deleteSome)
router
  .route('/:id')
  .delete(project_hutang_keuanganController.deleteById)
module.exports = router

