var React = require('react');

var NavBar = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">{"Blank-Canvas"}</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Link 1</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="#">Link 1</a></li>
          </ul>
        </div>
      </nav>
    )
  }
});

module.exports = NavBar