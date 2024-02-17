const router = require('express').Router()
const reservationController = require('../controllers/reservation.controller')
router
  .route('/')
  .get(reservationController.getSome)
router
  .route('/')
  .post(reservationController.create)
router
  .route('/:id')
  .get(reservationController.getById)
router
  .route('/:id')
  .put(reservationController.updateById)
router
  .route('/')
  .delete(reservationController.deleteSome)
router
  .route('/:id')
  .delete(reservationController.deleteById)
module.exports = router
