var React = require('react');

var Poop = React.createClass({
	render: function() {
		return (
			<div>
				<h3>{"Here we go: " + this.props.myTest}</h3>
			</div>
		)
	}
})

module.exports = Poop;
