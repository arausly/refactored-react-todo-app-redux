var React = require('react');
var ReactDOM = require('react-dom');
import TodoApp from 'TodoApp';


require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style-loader!css-loader!sass-loader!App');

ReactDOM.render(
<TodoApp/>, 
document.getElementById('main'));