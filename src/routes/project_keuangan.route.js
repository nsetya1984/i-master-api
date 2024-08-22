
const router = require('express').Router()
const project_keuanganController = require('../controllers/project_keuangan.controller')
router
  .route('/')
  .get(project_keuanganController.getSome)
router
  .route('/')
  .post(project_keuanganController.create)
router
  .route('/login')
  .post(project_keuanganController.login)
router
  .route('/gettotal')
  .get(project_keuanganController.getTotal)
router
  .route('/kategori/:kategori_id/gettotal')
  .get(project_keuanganController.getTotalFilter)
router
  .route('/premis/:premis_id/gettotal')
  .get(project_keuanganController.getTotalFilter)
router
  .route('/gettotaldaily')
  .get(project_keuanganController.getTotalDaily)
router
  .route('/getzontotalthismonth/zon/:id_zon')
  .get(project_keuanganController.getZonTotalThisMonth)
router
  .route('/getzonpremistotalmonthly/zon/:id_zon')
  .get(project_keuanganController.getZonPremisTotalMonthly)
router
  .route('/gettotaldaily/zon/:id_zon')
  .get(project_keuanganController.getZonTotalDaily)
router
  .route('/kategori/:kategori_id/gettotaldaily')
  .get(project_keuanganController.getTotalDailyFilter)
router
  .route('/premis/:premis_id/gettotaldaily')
  .get(project_keuanganController.getTotalDailyFilter)
router
  .route('/kategori/:kategori_id/gettop')
  .get(project_keuanganController.getTopFilter)
router
  .route('/:id')
  .get(project_keuanganController.getById)
router
  .route('/:id')
  .put(project_keuanganController.updateById)
router
  .route('/')
  .delete(project_keuanganController.deleteSome)
router
  .route('/:id')
  .delete(project_keuanganController.deleteById)
module.exports = router

