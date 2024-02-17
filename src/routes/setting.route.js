const router = require('express').Router()
const settingController = require('../controllers/setting.controller')
router
  .route('/')
  .get(settingController.getSome)
router
  .route('/')
  .post(settingController.create)
router
  .route('/login')
  .post(settingController.login)
router
  .route('/:id')
  .get(settingController.getById)
router
  .route('/:id')
  .put(settingController.updateById)
router
  .route('/')
  .delete(settingController.deleteSome)
router
  .route('/:id')
  .delete(settingController.deleteById)
module.exports = router
