import expect from 'expect';

var actions = require('actions');

describe('ACTIONS',()=>{
    it('should generate search text action',()=>{
        let action ={
            type: "SET_SEARCH_TEXT",
            searchText: 'some text'
        }
        
        let result = actions.setSearchText(action.searchText);
        expect(result).toEqual(action);
    });
    
    it("should create new to do",()=>{
        let action = {
            type:"ADD_TODO",
            newTodo:"Go to church",
        }
        
        let res = actions.addtodo(action.newTodo);
        expect(res).toEqual(action);
    });
    
      it("should toggle show completed todos",()=>{
        let action = {
            type:"TOGGLE_SHOW_COMPLETED",
        }
        
        let res = actions.toggleShowCompleted();
        expect(res).toEqual(action);
    });
    
      it("should toggle todos",()=>{
        let action = {
            type:"TOGGLE_TODO_ID",
            id:1
        }
        
        let res = actions.toggleTodo(action.id);
        expect(res).toEqual(action);
    })
    
})