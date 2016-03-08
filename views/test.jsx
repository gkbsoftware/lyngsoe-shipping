var React = require('react');
var Poop = require('./poop.jsx');

var Test = React.createClass({
	render: function() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<Poop myTest={this.props.myTest} />
			</div>
		)
	}
})

module.exports = Test;
