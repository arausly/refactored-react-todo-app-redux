import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Todo from 'TodoApp';

describe('Todo',()=>{
    it('Should exist',()=>{
        expect(Todo).toExist(); 
    });
})