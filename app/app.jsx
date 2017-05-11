var React = require('react');
var ReactDOM = require('react-dom');
var {HashRouter ,Route} = require('react-router-dom');


require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//require('style-loader!css-loader!sass-loader!App');

ReactDOM.render(
<p>React Boiler plate 3</p>, 
document.getElementById('main'));