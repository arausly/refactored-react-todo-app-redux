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
        let todocomp = TestUtils.renderIntoDocument(<TodoApp/>);
        todocomp.handleToDo('Greet aunty Ebe');
         todocomp.setState({todos:[]});
         expect(todocomp.state.todos.length).toBe(1);
    });
})