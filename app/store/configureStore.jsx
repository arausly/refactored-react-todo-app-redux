var redux = require('redux');

import {
         searchText,
         showCompleted,
         addtodoReducer,
        } 
from 'reducers';

export  let configure = () =>{
    let reducer = redux.combineReducers({
             searchText,
             showCompleted,
             addtodoReducer,
    }) 

    let store = redux.createStore(reducer,redux.compose(
     window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    
   return store;    
}