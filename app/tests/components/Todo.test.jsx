import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Todo from 'Todo';

describe('Todo',()=>{
    it('Should exist',()=>{
        expect(Todo).toExist(); 
    });
    
    it('should call toggle function when clicked',()=>{
        let todoData ={
            id:111,
            text:'wash clothes',
            completed:true,
        };
        let spy = expect.createSpy();
        let Comp = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle ={spy}/>);
        let $el = $(ReactDOM.findDOMNode(Comp));
        TestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalledWith(111);
    });
});