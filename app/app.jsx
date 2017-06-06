var React = require('react');
var ReactDOM = require('react-dom');
import redux from 'redux';
import {Provider} from 'react-redux';

import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI'; 

var actions  = require('actions');

var store = require('configureStore').configure();

store.subscribe(() =>{
	var state = store.getState();
	
    TodoAPI.setTodos(state.addtodoReducer);	
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));


require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style-loader!css-loader!sass-loader!App');

ReactDOM.render(
    <Provider store={store}>    
       <TodoApp/>
    </Provider>, 
document.getElementById('main'));