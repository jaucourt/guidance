const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.get('/v1/lmp', function (req, res) {
  res.locals.goods = req.session.data['public_goods']
  res.render('v1/lmp')
})
