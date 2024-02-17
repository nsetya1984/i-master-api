
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

