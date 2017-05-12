import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import TodoSearch from 'TodoSearch';
describe('TodoSearch',()=>{
   it('should exist',()=>{
      expect(TodoSearch).toExist();
   }); 

   it('should have it\'s text value passed upward',()=>{
       let spy = expect.createSpy();
       let todoSrch = TestUtils.renderIntoDocument(<TodoSearch onSearch ={spy}/>);
       todoSrch.refs.searchTxt.value = "HolySpirit";
       TestUtils.Simulate.change(todoSrch.refs.searchTxt);
       expect(spy).toHaveBeenCalledWith(false,"HolySpirit");
   });   
    
    it("should have it's checked value passed upward",()=>{
        let spy = expect.createSpy();
       let todoSrch = TestUtils.renderIntoDocument(<TodoSearch onSearch ={spy}/>);
       todoSrch.refs.showCompleted.checked =true;
       TestUtils.Simulate.change(todoSrch.refs.showCompleted);
       expect(spy).toHaveBeenCalledWith(true,"");
    });
});

