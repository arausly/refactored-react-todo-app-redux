import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import TodoApp from 'TodoApp';

describe('TodoApp',()=>{
    it('Should exist',()=>{
        expect(TodoApp).toExist(); 
    });
    it('should update todo list',()=>{
        let text ='Greet aunty Ebe';
        let todocomp = TestUtils.renderIntoDocument(<TodoApp/>);
          todocomp.setState({todos:[]});
               todocomp. handleToDo(text);
         expect(todocomp.state.todos[0].text).toBe(text);
         expect(todocomp.state.todos[0].createdAt).toBeA('number');
    
    });
    it('should properly update the state when called',()=>{
        let todoComponent = TestUtils.renderIntoDocument(<TodoApp/>);
        let todos = [
            {
                id:1,
                text:"Read Romans 6",
                completed:false,
                createdAt:12,
                completedAt:undefined
            }
        ]
        todoComponent.setState({todos:todos});
         
        expect(todoComponent.state.todos[0].completed).toBe(false);
        todoComponent.handleToggle(todos[0].id);
       
      expect(todoComponent.state.todos[0].completed).toBe(true);
        expect(todoComponent.state.todos[0].completedAt).toBeA('number'); 
    });
    
       it('should change to undefined when completed changes to false',()=>{
        let todoComponent = TestUtils.renderIntoDocument(<TodoApp/>);
        let todos = [
            {
                id:1,
                text:"Read Romans 6",
                completed:true,
                createdAt:12,
                completedAt:56
            }
        ];
           
       todoComponent.setState({todos:todos});
         
         expect(todoComponent.state.todos[0].completed).toBe(true);
         todoComponent.handleToggle(todos[0].id);
       
         expect(todoComponent.state.todos[0].completed).toBe(false);
         expect(todoComponent.state.todos[0].completedAt).toBe(undefined);
    });
});