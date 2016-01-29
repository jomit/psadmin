"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');


Router.run(routes, function(Handler){
	React.render(<Handler/>, document.getElementById("app"));
});

// Using the History Location based url for routing instead of # url.
// Does not work on browser < IE10
//Router.run(routes, Router.HistoryLocation, function(Handler){
//	React.render(<Handler/>, document.getElementById("app"));
//});