var React = require('react');

var BodyScripts = React.createClass({
    render: function() {
		return (
		    <bodyScripts>
                <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js" />
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/js/materialize.min.js" />
                <script type="text/javascript" src={this.props.routePath} />
		    </bodyScripts>
		)
	}
})

module.exports = BodyScripts;
