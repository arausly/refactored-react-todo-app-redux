import * as redux from 'redux';
import thunk from 'redux-thunk';

import {
         searchText,
         showCompleted,
         addtodoReducer,
	     
        } 
from 'reducers';

export  let configure = (initialState ={}) =>{
    let reducer = redux.combineReducers({
             searchText,
             showCompleted,
             addtodoReducer,
    }) 

    let store = redux.createStore(reducer,initialState,redux.compose(
	 redux.applyMiddleware(thunk),
     window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    
   return store;    
}