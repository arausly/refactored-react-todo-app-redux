var React = require('react');
var ReactDOM = require('react-dom');
import TodoApp from 'TodoApp';
import redux from 'redux';
import {Provider} from 'react-redux';

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




require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style-loader!css-loader!sass-loader!App');

ReactDOM.render(
    <Provider store={store}>    
       <TodoApp/>
    </Provider>, 
document.getElementById('main'));