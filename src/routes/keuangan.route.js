const router = require('express').Router()
const keuanganController = require('../controllers/keuangan.controller')

router
  .route('/')
  .get(keuanganController.getSome)
router
  .route('/outlet/:outlet_id')
  .get(keuanganController.getSomeByOutletId)
router
  .route('/outlet/:outlet_id/periode/:periode_id')
  .get(keuanganController.getSomeByOutletIdPeriodeId)
router
  .route('/belanjadanpendapatan')
  .post(keuanganController.postBelanjaPendapatan)
router
  .route('/')
  .post(keuanganController.create)
router
  .route('/:id')
  .put(keuanganController.updateById)
router
  .route('/:id/undefined')
  .put(keuanganController.updateByIdAndItem)
router
  .route('/gettotal/:periode_id')
  .get(keuanganController.getTotal)
router
  .route('/getTotalByOutletByPeriode/:periode_id/:outlet_id')
  .get(keuanganController.getTotalByOutletByPeriode)
router
  .route('/gettopten/:periode_id')
  .get(keuanganController.getTopTenByPeriode)
router
  .route('/gettotaldaily/:periode_id')
  .get(keuanganController.getDailyTotalOmsetByPeriode)
router
  .route('/getDailyTotalOmsetByPeriodeByOutlet/:periode_id/:outlet_id')
  .get(keuanganController.getDailyTotalOmsetByPeriodeByOutlet)
router
  .route('/keuangananditem/:id')
  .get(keuanganController.getKeuanganAndItemById)
router
  .route('/:id')
  .get(keuanganController.getById)
router
  .route('/')
  .delete(keuanganController.deleteSome)
router
  .route('/:id')
  .delete(keuanganController.deleteById)

module.exports = router
