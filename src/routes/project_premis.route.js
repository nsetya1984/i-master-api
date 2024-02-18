
const router = require('express').Router()
const project_premisController = require('../controllers/project_premis.controller')
router
  .route('/')
  .get(project_premisController.getSome)
router
  .route('/')
  .post(project_premisController.create)

router
  .route('/:id')
  .put(project_premisController.updateById)
router
  .route('/')
  .delete(project_premisController.deleteSome)
router
  .route('/:id')
  .delete(project_premisController.deleteById)
router
  .route('/gettotal')
  .get(project_premisController.getTotal)

router
  .route('/gettotalbycategori')
  .get(project_premisController.getTotalByCategori)
router
  .route('/kategori/:kategori_id/gettotal')
  .get(project_premisController.getTotalFilter)
router
  .route('/:id')
  .get(project_premisController.getById)
module.exports = router

