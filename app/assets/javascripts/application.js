/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// calculate date 30 days from now

var future = new Date();
future.setTime(future.getTime() + 30 * 24 * 60 * 60 * 1000);
document.getElementById("date").innerHTML = future.getUTCDate().toString() + "&nbsp;" +
  future.toLocaleString('default', {
    month: 'long'
  }).toString() +
  "&nbsp;" + future.getUTCFullYear();



var allPlots = $("svg.plots .plot");

allPlots.on("click", function() {

  allPlots.removeClass("selected");
  $(this).addClass("selected");

});

const topics = [
  'Arable land',
  'Bird feeding',
  'Feeding birds',
  'Tree health',
  'Kestrels',
  'Flower mix'
]

const landparcels = [
  'SK 3957 1585',
  'SK 3957 1586',
  'SK 3957 1587',
  'SK 3957 1588',
  'SK 3957 1589',
  'SK 3957 1590'
]

//const guidance = [
 // 'A5: Use cover crops',
//  'A6: Create or maintain hill slope tree shelter belts',
//  'U2: Fence off water sources from livestock',
//  'A8: Increase organic matter in soils',
//  'U3: Provide drinking water for livestock',
//  'A1: Use lower emission fertilisers'
//]

//accessibleAutocomplete({
//  element: document.querySelector('#my-autocomplete-container'),
//  id: 'my-autocomplete', // To match it to the existing <label>.
//  source: topics
//})

//accessibleAutocomplete({
//  element: document.querySelector('#my-autocomplete-container'),
//  id: 'my-autocomplete', // To match it to the existing <label>.
//  showAllValues: true, dropdownArrow: () => '',
//  source: landparcels,
//})

//accessibleAutocomplete({
//  element: document.querySelector('#guidance-autocomplete-container'),
 // id: 'guidance-autocomplete', // To match it to the existing <label>.
 // showAllValues: true, dropdownArrow: () => '',
 // source: guidance,
//})

