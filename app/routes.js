const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.get('/v1/lmp', function (req, res) {
  res.locals.goods = req.session.data['public_goods']
  res.render('v1/lmp')
})

// Search goods from default session data file and render view or no results view
router.get('/v1/manage-good', (req, res) => {
  const good = req.session.data['public_goods'].filter(good => good.id === req.session.data['id'])

  res.locals.good = good[0]

  if (good == false) {
    res.render('no-match')
  } else {
    res.render('v1/manage-good')
  }
})
