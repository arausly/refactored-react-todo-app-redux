var React = require('react');
var ReactDOM = require('react-dom');
import TodoApp from 'TodoApp';
import redux from 'redux';

//var actions = require('actions');
import {
         setSearchText,
         addtodo,
         toggleShowCompleted,
         toggleTodo
       }
from 'actions';

var store = require('configureStore').configure();


store.subscribe(()=>{
   console.log('New State',store.getState());
});

store.dispatch(addtodo('finish redux'));
store.dispatch(setSearchText('redux'));
store.dispatch(toggleShowCompleted());




require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style-loader!css-loader!sass-loader!App');

ReactDOM.render(
<TodoApp/>, 
document.getElementById('main'));