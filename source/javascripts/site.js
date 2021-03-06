// This is where it all goes :)
// Performance Budget: 250kb, minified (idelaly also g-zipped)
// If you exceed this budget, you must either
// 1) Delete features/code
// 2) Implement webpack
// Both of which are not ideal. So, stay under your budget!

//= require 'react.min'
//= require 'react-dom.min'
//= require 'picoModal'
//= require 'displayModal'
//= require 'currencies'
//= require 'action'
//= require 'actions'
//= require 'toasts'

displayModal({ title: "Allow data collection?", content: "<p>Allowing us to collect data will let us get the information you want faster.</p>"})

// Globals
window.wealth = 0;
window.influence = 0;
window.power = 0;
window.network = 0;
window.whiteboard = 0;

window.wealthIncome = 0;
window.influenceIncome = 0;
window.powerIncome = 1;
window.networkIncome = 0;
window.whiteboardIncome = 0;