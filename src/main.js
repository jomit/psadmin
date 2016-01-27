$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var Author = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');


// Basic code for routing. No recommended for production
(function(win){
	"use strict";
	
	var App = React.createClass({
		render: function(){
			var Child;

			switch(this.props.route){
				case "about": Child = About; break;
				case "authors": Child = Author; break;
				default : Child = Home; break;
			}

			return (
				<div>
					<Header />
					<Child />
				</div>
			);
		}
	});

	function render(){
		var route = win.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
	}

	win.addEventListener('hashchange', render);
	render();

})(window);

//React.render(<Home />,document.getElementById('app'));