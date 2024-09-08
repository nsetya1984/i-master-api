
const router = require('express').Router()
const rkp_entController = require('../controllers/rkp_ent.controller')
router
  .route('/')
  .get(rkp_entController.getSome)
router
  .route('/')
  .post(rkp_entController.create)
router
  .route('/:id')
  .put(rkp_entController.updateById)
router
  .route('/')
  .delete(rkp_entController.deleteSome)
router
  .route('/:id')
  .delete(rkp_entController.deleteById)
router
  .route('/gettotal')
  .get(rkp_entController.getTotal)
router
  .route('/:id')
  .get(rkp_entController.getById)
module.exports = router

