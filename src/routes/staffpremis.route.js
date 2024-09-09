
const router = require('express').Router()
const staffpremisController = require('../controllers/staffpremis.controller')
router
  .route('/')
  .get(staffpremisController.getSome)
router
  .route('/')
  .post(staffpremisController.create)
router
  .route('/:id')
  .put(staffpremisController.updateById)
router
  .route('/')
  .delete(staffpremisController.deleteSome)
router
  .route('/:id')
  .delete(staffpremisController.deleteById)
router
  .route('/:id')
  .get(staffpremisController.getById)
module.exports = router



