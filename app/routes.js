const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Set service name based on sub folders for different prototypes
router.get('/land-manager/*', function(req, res, next){
  res.locals['serviceName'] = 'Make or update an ELM claim'

  next()
})

router.get('/adviser/*', function(req, res, next){
  res.locals['serviceName'] = 'Make or update an ELM claim'

  next()
})

router.get('/tier1-v1/*', function(req, res, next){
  res.locals['serviceName'] = 'Apply for Environmental Land Management'

  next()
})

router.get('/tier1-v2/*', function(req, res, next){
  res.locals['serviceName'] = 'Apply for ELM'

  next()
})

// Tier 1 version 2

// Select an action
router.post('/actions-answer', function (req, res) {

  var action = req.session.data['what-action']

  if (action == "agroforestry"){res.redirect('/tier1-v2/actions-answers?agroforestry[selected]=true&agroforestry[amount]=1')}
  if (action == "bare-soil"){res.redirect('/tier1-v2/options/bare-soil')}
  if (action == "bog-grazing"){res.redirect('/tier1-v2/options/bog-grazing')}
  if (action == "canopy-cover"){res.redirect('/tier1-v2/options/canopy-cover')}
  if (action == "cover-crops"){res.redirect('/tier1-v2/actions-answers?cover-crops[selected]=true&cover-crops[amount]=1')}
  if (action == "create-grassland"){res.redirect('/tier1-v2/options/create-grassland')}
  if (action == "deadwood"){res.redirect('/tier1-v2/actions-answers?deadwood[selected]=true&deadwood[amount]=1')}
  if (action == "drinking-water"){res.redirect('/tier1-v2/options/drinking-water')}
  if (action == "fencing"){res.redirect('/tier1-v2/options/fencing')}
  if (action == "fertilisers"){res.redirect('/tier1-v2/actions-answers?fertilisers[selected]=true&fertilisers[amount]=1')}
  if (action == "fertiliser-spreading"){res.redirect('/tier1-v2/options/fertiliser-spreading')}
  if (action == "flower-habitat"){res.redirect('/tier1-v2/options/flower-habitat')}
  if (action == "grass-strips"){res.redirect('/tier1-v2/options/grass-strips')}
  if (action == "manure"){res.redirect('/tier1-v2/actions-answers?manure[selected]=true&manure[amount]=1')}
  if (action == "no-till"){res.redirect('/tier1-v2/options/no-till')}
  if (action == "nutrients"){res.redirect('/tier1-v2/options/nutrients')}
  if (action == "tree-belts"){res.redirect('/tier1-v2/options/tree-belts')}
  if (action == "wind-erosion"){res.redirect('/tier1-v2/actions-answers?wind-erosion[selected]=true&wind-erosion[amount]=1')}
  else {res.redirect('/tier1-v2/actions-validation')}
})

// Raise errors on attributes
router.post('/agroforestry-validation', function (req, res) {

  var agroForestry = req.session.data['agroforestry']['amount']

  if (agroForestry == undefined ){res.redirect('/tier1-v2/options/agroforestry-validation')}
  if (agroForestry == null ){res.redirect('/tier1-v2/options/agroforestry-validation')}
  if (agroForestry == 0 ){res.redirect('/tier1-v2/options/agroforestry-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/bare-soil-validation', function (req, res) {

  var bareSoil = req.session.data['bare-soil']['amount']

  if (bareSoil == undefined ){res.redirect('/tier1-v2/options/bare-soil-validation')}
  if (bareSoil == null ){res.redirect('/tier1-v2/options/bare-soil-validation')}
  if (bareSoil == 0 ){res.redirect('/tier1-v2/options/bare-soil-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/bog-grazing-validation', function (req, res) {

  var bogGrazing = req.session.data['bog-grazing']['amount']

  if (bogGrazing == undefined ){res.redirect('/tier1-v2/options/bog-grazing-validation')}
  if (bogGrazing == null ){res.redirect('/tier1-v2/options/bog-grazing-validation')}
  if (bogGrazing == 0 ){res.redirect('/tier1-v2/options/bog-grazing-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/canopy-cover-validation', function (req, res) {

  var canopyCover = req.session.data['canopy-cover']['amount']

  if (canopyCover == undefined ){res.redirect('/tier1-v2/options/canopy-cover-validation')}
  if (canopyCover == null ){res.redirect('/tier1-v2/options/canopy-cover-validation')}
  if (canopyCover == 0 ){res.redirect('/tier1-v2/options/canopy-cover-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/cover-crops-validation', function (req, res) {

  var coverCrops = req.session.data['cover-crops']['amount']

  if (coverCrops == undefined ){res.redirect('/tier1-v2/options/cover-crops-validation')}
  if (coverCrops == null ){res.redirect('/tier1-v2/options/cover-crops-validation')}
  if (coverCrops == 0 ){res.redirect('/tier1-v2/options/cover-crops-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/create-grassland-validation', function (req, res) {

  var createGrassland = req.session.data['create-grassland']['amount']

  if (createGrassland == undefined ){res.redirect('/tier1-v2/options/create-grassland-validation')}
  if (createGrassland == null ){res.redirect('/tier1-v2/options/create-grassland-validation')}
  if (createGrassland == 0 ){res.redirect('/tier1-v2/options/create-grassland-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/deadwood-validation', function (req, res) {

  var deadWood = req.session.data['deadwood']['amount']

  if (deadWood == undefined ){res.redirect('/tier1-v2/options/deadwood-validation')}
  if (deadWood == null ){res.redirect('/tier1-v2/options/deadwood-validation')}
  if (deadWood == 0 ){res.redirect('/tier1-v2/options/deadwood-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/drinking-water-validation', function (req, res) {

  var drinkingWater = req.session.data['drinking-water']['amount']

  if (drinkingWater == undefined ){res.redirect('/tier1-v2/options/drinking-water-validation')}
  if (drinkingWater == null ){res.redirect('/tier1-v2/options/drinking-water-validation')}
  if (drinkingWater == 0 ){res.redirect('/tier1-v2/options/drinking-water-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/fencing-validation', function (req, res) {

  var fencing = req.session.data['fencing']['amount']

  if (fencing == undefined ){res.redirect('/tier1-v2/options/fencing-validation')}
  if (fencing == null ){res.redirect('/tier1-v2/options/fencing-validation')}
  if (fencing == 0 ){res.redirect('/tier1-v2/options/fencing-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/fertilisers-validation', function (req, res) {

  var fertilisers = req.session.data['fertilisers']['amount']

  if (fertilisers == undefined ){res.redirect('/tier1-v2/options/fertilisers-validation')}
  if (fertilisers == null ){res.redirect('/tier1-v2/options/fertilisers-validation')}
  if (fertilisers == 0 ){res.redirect('/tier1-v2/options/fertilisers-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/fertiliser-spreading-validation', function (req, res) {

  var fertiliserSpreading = req.session.data['fertiliser-spreading']['amount']

  if (fertiliserSpreading == undefined ){res.redirect('/tier1-v2/options/fertiliser-spreading-validation')}
  if (fertiliserSpreading == null ){res.redirect('/tier1-v2/options/fertiliser-spreading-validation')}
  if (fertiliserSpreading == 0 ){res.redirect('/tier1-v2/options/fertiliser-spreading-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/flower-habitat-validation', function (req, res) {

  var flowerHabitat = req.session.data['flower-habitat']['amount']

  if (flowerHabitat == undefined ){res.redirect('/tier1-v2/options/flower-habitat-validation')}
  if (flowerHabitat == null ){res.redirect('/tier1-v2/options/flower-habitat-validation')}
  if (flowerHabitat == 0 ){res.redirect('/tier1-v2/options/flower-habitat-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/grass-strips-validation', function (req, res) {

  var grassStrips = req.session.data['grass-strips']['amount']

  if (grassStrips == undefined ){res.redirect('/tier1-v2/options/grass-strips-validation')}
  if (grassStrips == null ){res.redirect('/tier1-v2/options/grass-strips-validation')}
  if (grassStrips == 0 ){res.redirect('/tier1-v2/options/grass-strips-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/manure-validation', function (req, res) {

  var manure = req.session.data['manure']['amount']

  if (manure == undefined ){res.redirect('/tier1-v2/options/manure-validation')}
  if (manure == null ){res.redirect('/tier1-v2/options/manure-validation')}
  if (manure == 0 ){res.redirect('/tier1-v2/options/manure-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/no-till-validation', function (req, res) {

  var noTill = req.session.data['no-till']['amount']

  if (noTill == undefined ){res.redirect('/tier1-v2/options/no-till-validation')}
  if (noTill == null ){res.redirect('/tier1-v2/options/no-till-validation')}
  if (noTill == 0 ){res.redirect('/tier1-v2/options/no-till-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/nutrients-validation', function (req, res) {

  var nutrients = req.session.data['nutrients']['amount']

  if (nutrients == undefined ){res.redirect('/tier1-v2/options/nutrients-validation')}
  if (nutrients == null ){res.redirect('/tier1-v2/options/nutrients-validation')}
  if (nutrients == 0 ){res.redirect('/tier1-v2/options/nutrients-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/tree-belts-validation', function (req, res) {

  var treeBelts = req.session.data['tree-belts']['amount']

  if (treeBelts == undefined ){res.redirect('/tier1-v2/options/tree-belts-validation')}
  if (treeBelts == null ){res.redirect('/tier1-v2/options/tree-belts-validation')}
  if (treeBelts == 0 ){res.redirect('/tier1-v2/options/tree-belts-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

router.post('/wind-erosion-validation', function (req, res) {

  var windErosion = req.session.data['wind-erosion']['amount']

  if (windErosion == undefined ){res.redirect('/tier1-v2/options/wind-erosion-validation')}
  if (windErosion == null ){res.redirect('/tier1-v2/options/wind-erosion-validation')}
  if (windErosion == 0 ){res.redirect('/tier1-v2/options/wind-erosion-validation')}
  else {res.redirect('/tier1-v2/actions-answers')}

})

// Step-by-step
router.post('/application-complete', function (req, res) {

  var canopyCover = req.session.data['canopy-cover']['amount']
  var deadWood = req.session.data['deadwood']['amount']
  var agroForestry = req.session.data['agroforestry']['amount']
  var treeBelts = req.session.data['tree-belts']['amount']

  if (canopyCover != 0){res.redirect('/tier1-v2/completing-your-application')}
  if (deadWood != 0){res.redirect('/tier1-v2/completing-your-application')}
  if (agroForestry != 0){res.redirect('/tier1-v2/completing-your-application')}
  if (treeBelts != 0){res.redirect('/tier1-v2/completing-your-application')}
  else {res.redirect('/tier1-v2/agreement-confirmation')}
})

// Tier 1 version 1

// Select an action
router.post('/actions-answer-1', function (req, res) {

  var action = req.session.data['what-action']

  if (action == "agroforestry"){res.redirect('/tier1-v1/agroforestry')}
  if (action == "bare-soil"){res.redirect('/tier1-v1/bare-soil')}
  if (action == "bog-grazing"){res.redirect('/tier1-v1/bog-grazing')}
  if (action == "canopy-cover"){res.redirect('/tier1-v1/canopy-cover')}
  if (action == "cover-crops"){res.redirect('/tier1-v1/cover-crops')}
  if (action == "create-grassland"){res.redirect('/tier1-v1/create-grassland')}
  if (action == "deadwood"){res.redirect('/tier1-v1/deadwood')}
  if (action == "drinking-water"){res.redirect('/tier1-v1/drinking-water')}
  if (action == "fencing"){res.redirect('/tier1-v1/fencing')}
  if (action == "fertilisers"){res.redirect('/tier1-v1/fertilisers')}
  if (action == "fertiliser-spreading"){res.redirect('/tier1-v1/fertiliser-spreading')}
  if (action == "flower-habitat"){res.redirect('/tier1-v1/flower-habitat')}
  if (action == "grass-strips"){res.redirect('/tier1-v1/grass-strips')}
  if (action == "manure"){res.redirect('/tier1-v1/manure')}
  if (action == "no-till"){res.redirect('/tier1-v1/no-till')}
  if (action == "nutrients"){res.redirect('/tier1-v1/nutrients')}
  if (action == "tree-belts"){res.redirect('/tier1-v1/tree-belts')}
  else {res.redirect('/tier1-v1/wind-erosion')}
})

// Arrange a site visit
router.post('/site-visit-required', function (req, res) {

  var canopyCover = req.session.data['canopy-cover']['amount']
  var deadWood = req.session.data['deadwood']['amount']
  var agroForestry = req.session.data['agroforestry']['amount']
  var treeBelts = req.session.data['tree-belts']['amount']

  if (canopyCover != 0){res.redirect('/tier1-v1/site-visit')}
  if (deadWood != 0){res.redirect('/tier1-v1/site-visit')}
  if (agroForestry != 0){res.redirect('/tier1-v1/site-visit')}
  if (treeBelts != 0){res.redirect('/tier1-v1/site-visit')}
  else {res.redirect('/tier1-v1/calculation')}
})

// Step-by-step
router.post('/application-complete', function (req, res) {

  var canopyCover = req.session.data['canopy-cover']['amount']
  var deadWood = req.session.data['deadwood']['amount']
  var agroForestry = req.session.data['agroforestry']['amount']
  var treeBelts = req.session.data['tree-belts']['amount']

  if (canopyCover != 0){res.redirect('/tier1-v1/completing-your-application')}
  if (deadWood != 0){res.redirect('/tier1-v1/completing-your-application')}
  if (agroForestry != 0){res.redirect('/tier1-v1/completing-your-application')}
  if (treeBelts != 0){res.redirect('/tier1-v1/completing-your-application')}
  else {res.redirect('/tier1-v1/agreement-confirmation')}
})

// Land managers

router.get('/land-manager/accountcheck', function (req, res) {
  const option = req.session.data['account-check']

  if (option == "register") {
    res.redirect('/land-manager/register')
  } else {
    res.redirect('/land-manager/sign-in')
  }
})

// Search goods from default session data file and render view or no results view
router.get('/land-manager/manage-activity', (req, res) => {
  const good = req.session.data['goods'].filter(good => good.id === req.session.data['id'])
  res.locals.good = good[0]
  res.render('land-manager/manage-activity')
})

module.exports = router
