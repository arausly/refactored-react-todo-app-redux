import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import {TodoSearch} from 'TodoSearch';
describe('TodoSearch',()=>{
   it('should exist',()=>{
      expect(TodoSearch).toExist();
   }); 

   it('should dispatch action when search text is set',()=>{
       let spy = expect.createSpy();
       let todoSrch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
       todoSrch.refs.searchTxt.value = "HolySpirit";
       TestUtils.Simulate.change(todoSrch.refs.searchTxt);
	   let action = {
		   type:"SET_SEARCH_TEXT",
		   searchText:"HolySpirit",
	   };
       expect(spy).toHaveBeenCalledWith(action);
   });   
    
    it("should dispatch action when completed todos is checked",()=>{
        let spy = expect.createSpy();
       let todoSrch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
       todoSrch.refs.showCompleted.checked =true;
       TestUtils.Simulate.change(todoSrch.refs.showCompleted);
		let action = {
			type:"TOGGLE_SHOW_COMPLETED",
		}
       expect(spy).toHaveBeenCalledWith(action);
    });
});

