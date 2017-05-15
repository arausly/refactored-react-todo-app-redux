import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import AddToDo from 'AddToDo';

describe('AddToDo',()=>{
   it('should exist',()=>{
      expect(AddToDo).toExist(); 
   }); 

   it('should pass the value upward',()=>{
       let spy = expect.createSpy();
       let addtodoComp = TestUtils.renderIntoDocument(<AddToDo passToDo={spy}/>);
       addtodoComp.refs.todo.value="yeah man"
       let $addNode = $(ReactDOM.findDOMNode(addtodoComp));
       let $actual = TestUtils.Simulate.submit($addNode.find('form')[0]);
       expect(spy).toHaveBeenCalledWith("yeah man");
       
   });
      it('should not pass the value upward',()=>{
       let spy = expect.createSpy();
       let addtodoComponent = TestUtils.renderIntoDocument(<AddToDo passToDo={spy}/>);
       addtodoComponent.refs.todo.value="11111"
       let $addNode = $(ReactDOM.findDOMNode(addtodoComponent));
       let actual = TestUtils.Simulate.submit($addNode.find('form')[0]);
       expect(spy).toNotHaveBeenCalled("11111");
       
   });  
});