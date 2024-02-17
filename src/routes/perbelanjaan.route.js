const router = require('express').Router()
const perbelanjaanController = require('../controllers/perbelanjaan.controller')

router
  .route('/keuangan/:keuangan_id')
  .get(perbelanjaanController.getSomeByKeuanganId)
module.exports = router
