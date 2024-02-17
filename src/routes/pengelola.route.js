const router = require('express').Router()
const pengelolaController = require('../controllers/pengelola.controller')

router
  .route('/')
  .get(pengelolaController.getSome)
router
  .route('/')
  .post(pengelolaController.create)
router
  .route('/:id')
  .put(pengelolaController.updateById)
router
  .route('/gettotal')
  .get(pengelolaController.getTotal)
router
  .route('/:id')
  .get(pengelolaController.getById)
router
  .route('/')
  .delete(pengelolaController.deleteSome)
router
  .route('/:id')
  .delete(pengelolaController.deleteById)

module.exports = router
