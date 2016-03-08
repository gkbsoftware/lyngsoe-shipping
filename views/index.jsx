var React = require('react');
var Header = require('./layout/head.jsx');
var BodyScripts = require('./layout/body-scripts.jsx');

var Homepage = React.createClass({
	render: function() {
		return (
			<html>
			  {/* Insert head */}
			  <Header />
			  
			  <body>
			  	{/* Show spinner while loading resources to client side */}
			    <div className="preloader-wrapper big active" id="preloader">
			      <div className="spinner-layer spinner-blue-only">
			        <div className="circle-clipper left">
			          <div className="circle" />
			        </div><div className="gap-patch">
			          <div className="circle" />
			        </div><div className="circle-clipper right">
			          <div className="circle" />
			        </div>
			      </div>
			    </div>
			    
			    { /* Insert client-side React Component */ }
			    <div id="react-entry" />
			    
			    { /* Insert JS into end of body */ }
			    <BodyScripts routePath={this.props.routePath} />
			  </body>
			</html>
		)
	}
})

module.exports = Homepage;
