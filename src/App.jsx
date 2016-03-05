require("./stylesheets/webpack-style.css");

var React = require('react');
var NavBar = require("./NavBar.jsx");

$( document ).ready(function(){
  $(".button-collapse").sideNav();
  console.log('jquery: document ready!')
})

var App = React.createClass({
  componentDidMount: function() {
    document.getElementById('preloader').remove()
    console.log('componentDidMount: removing preloader');
  },
  
  render: function() {
    return (
      <app>
        <NavBar />
      </app>
    )
  }
});

var renderApp = function() {
  React.render(<App/>, document.getElementById('react-entry'));
}

renderApp();

module.exports = App
