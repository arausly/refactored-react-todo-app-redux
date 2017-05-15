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
    });
    it('should properly update the state when called',()=>{
        let todoComponent = TestUtils.renderIntoDocument(<TodoApp/>);
        let todos = [
            {
                id:1,
                text:"Read Romans 6",
                completed:true,
            }
        ]
        todoComponent.setState({todos:todos});
         expect(todoComponent.state.todos[0].completed).toBe(true);
        todoComponent.handleToggle(todos[0].id);
        expect(todoComponent.state.todos[0].completed).toBe(false);
    });
});