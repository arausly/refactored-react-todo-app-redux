import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import {Provider} from 'react-redux';
import $ from 'jQuery';

import TodoApp from 'TodoApp';
var configureStore = require('configureStore');
import TodoList from 'TodoList';


describe('TodoApp',()=>{
    it('Should exist',()=>{
        expect(TodoApp).toExist(); 
    });

    it('should render Todo Lists',()=>{
        let store = configureStore.configure();
        let provider = TestUtils.renderIntoDocument(
         <Provider store ={store}>
            <TodoApp/>    
         </Provider>   
        );
        let todoApp = TestUtils.scryRenderedComponentsWithType(provider,TodoApp)[0];
        let todoList = TestUtils.scryRenderedComponentsWithType(todoApp,TodoList);
        
        expect(todoList.length).toEqual(1) 
    });
});