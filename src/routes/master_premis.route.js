
const router = require('express').Router()
const master_premisController = require('../controllers/master_premis.controller')
router
  .route('/')
  .get(master_premisController.getSome)
router
  .route('/id_zon/:id_zon')
  .get(master_premisController.getPremisByZonId)
router
  .route('/')
  .post(master_premisController.create)
router
  .route('/:id')
  .put(master_premisController.updateById)
router
  .route('/')
  .delete(master_premisController.deleteSome)
router
  .route('/:id')
  .delete(master_premisController.deleteById)
router
  .route('/gettotal')
  .get(master_premisController.getTotal)
router
  .route('/gettotalbycategori')
  .get(master_premisController.getTotalByCategori)
router
  .route('/kategori/:kategori_id/gettotal')
  .get(master_premisController.getTotalFilter)
router
  .route('/:id')
  .get(master_premisController.getById)
module.exports = router

