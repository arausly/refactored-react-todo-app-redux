import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import {Provider} from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import defaultTodoList,{TodoList} from 'TodoList';
import ConnectedTodo,{Todo} from 'Todo';
import {configure} from 'configureStore';

describe('TodoList',()=>{
    it('Should exist',()=>{
        expect(TodoList).toExist(); 
    });
    
  it('Should render the correct number of todoItems',()=>{
      var todos =
     [
        {
         id:1,
         text:'test must work',
         completed:false,
         createdAt:123,
         completedAt:undefined
         },
         {
          id:2,
          test:'must finish video',
          completed:false,
          createdAt:774,
          completedAt:undefined
         }
      ];
      let store = configure({
          todos,
      });
      let provider = TestUtils.renderIntoDocument(
       <Provider store ={store}>
         <defaultTodoList/>      
       </Provider>          
      ); 
      let todolist = TestUtils.scryRenderedComponentsWithType(provider,defaultTodoList)[0];
      let todoComponents =  TestUtils.scryRenderedComponentsWithType(todolist,Todo);
      expect(todoComponents.length).toBe(todos.length);
  });
    
  it('Should render empty message if no todos',()=>{
      var todos = [];
      let todoComp = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      let $el = $(ReactDOM.findDOMNode(todoComp));
      expect($el.find('.box__message').length).toBe(1);
  });
});