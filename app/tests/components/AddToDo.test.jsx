import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import {AddToDo} from 'AddToDo';
import * as actions from 'actions';

describe('AddToDo',()=>{
   it('should exist',()=>{
      expect(AddToDo).toExist(); 
   }); 

   it('should dispatch add todo action for valid todo text',()=>{
       let spy = expect.createSpy();
       
	   let action = actions.startAddTodo('some random text');
       
       let addtodoComp = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
       addtodoComp.refs.todo.value="yeah man"
       let $addNode = $(ReactDOM.findDOMNode(addtodoComp));
       let $actual = TestUtils.Simulate.submit($addNode.find('form')[0]);
       expect(spy).toHaveBeenCalledWith(action);
       
   });
      it('should dispatch add todo action for invalid text',()=>{
       let spy = expect.createSpy();
       let addtodoComponent = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
       addtodoComponent.refs.todo.value="";
       let $addNode = $(ReactDOM.findDOMNode(addtodoComponent));
       let actual = TestUtils.Simulate.submit($addNode.find('form')[0]);
       expect(spy).toNotHaveBeenCalled(); 
   });  
   
});