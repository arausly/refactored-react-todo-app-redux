import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList',()=>{
    it('Should exist',()=>{
        expect(TodoList).toExist(); 
    });
    
  it('Should render the correct number of todoItems',()=>{
      var todos =
     [
        {
         id:1,
         text:'test must work'
         },
         {
          id:2,
          test:'must finish video'
         }
      ];
      let todoComp = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      let todosComponent = TestUtils.scryRenderedComponentsWithType(todoComp,Todo);
      expect(todosComponent.length).toBe( todos.length);
  });
    
});