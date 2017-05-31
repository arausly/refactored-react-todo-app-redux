var redux = require('redux');

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
     window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    
   return store;    
}