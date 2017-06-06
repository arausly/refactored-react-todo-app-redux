import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import {Todo} from 'Todo';
import * as actions from 'actions';

describe('Todo',()=>{
    it('Should exist',()=>{
        expect(Todo).toExist(); 
    });
    
    it('should dispatch toogle todo action on clicked',()=> {
        let todoData ={
            id:111,
            text:'wash clothes',
            completed:true,
        };
		
		let action = actions.startToggleTodo(todoData.id,!todoData.completed);
        
        let spy = expect.createSpy();
        let Comp = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(Comp));
        TestUtils.Simulate.click($el[0]);
		
        expect(spy).toHaveBeenCalledWith(action);
    });
});