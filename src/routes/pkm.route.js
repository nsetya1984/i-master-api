const router = require('express').Router()
const pkmController = require('../controllers/pkm.controller')
router
  .route('/')
  .get(pkmController.getSome)
router
  .route('/id_zon/:id_zon')
  .get(pkmController.getPremisByZonId)
router
  .route('/')
  .post(pkmController.create)
router
  .route('/:id')
  .put(pkmController.updateById)
router
  .route('/')
  .delete(pkmController.deleteSome)
router
  .route('/:id')
  .delete(pkmController.deleteById)
router
  .route('/gettotal')
  .get(pkmController.getTotal)
router
  .route('/gettotalbycategori')
  .get(pkmController.getTotalByCategori)
router
  .route('/gettotalfilter')
  .get(pkmController.getTotalFilter)
router
  .route('/:id')
  .get(pkmController.getById)
module.exports = router

