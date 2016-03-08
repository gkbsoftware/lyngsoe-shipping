var React = require('react');

var Header = React.createClass({
    render: function() {
		return (
		    <head>
		        <title>{this.props.title}</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/css/materialize.min.css"  media="screen,projection" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		    </head>
		)
	}
})

module.exports = Header;
