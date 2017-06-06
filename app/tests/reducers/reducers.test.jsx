import expect from 'expect';
import df from 'deep-freeze-strict';

var reducers = require('reducers');


describe('Reducers',()=>{
   describe('Search Text',()=>{
      it('should set search text properly',()=>{
          let action = {
              type:"SET_SEARCH_TEXT",
              searchText:"dog"
          };
       
          let res = reducers.searchText(df(''),df(action));
          expect(res).toEqual(action.searchText);
      }); 
   });
  describe('show Completed todos',()=>{
     it('should toggle show completed todos',()=>{
         let action = {
             type:"TOGGLE_SHOW_COMPLETED",
         };
            
        let res = reducers.showCompleted(df(false),df(action));
         expect(res).toBe(true);
     }); 
  });
 describe('Add todo',()=>{
    it('should add todos properly',()=>{
        let action ={
          type:"ADD_TODO",
          todo:{
			 id:'83838',
			 text:'practice being confident',
			 createdAt:12334,
			 completed:false,
		  }
        }
        
        let res = reducers.addtodoReducer(df([]),df(action));
        expect(res.length).toEqual(1);
        expect(res[0]).toEqual(action.todo);
    }); 
    
	 it('should add todos array',()=>{
		
		  let todos =[{
			       id:1,    
                   text:"finish redux",  
                   completed:true,
                   createdAt:9,
                   completedAt:125,
			  
		  }];
		 let action = {
			 type:"ADD_TODOS",
			 todos,
		 } 
		 
		 let res = reducers.addtodoReducer(df([]),df(action));
		 expect(res.length).toEqual(todos.length);
		 expect(res[0]).toEqual(todos[0]);
	 });
    it("should update todos with matching ids",()=>{
       let todos =
             [{
                   id:1,    
                   text:"finish redux",  
                   completed:true,
                   createdAt:9,
                   completedAt:125,
               }]; 
        
		 let updates ={
           completed:false,
		   completedAt:null
		 } 
		 
         let action={
          type:"UPDATE_TODO",
          id:todos[0].id,
		  updates
        }
 
        let res = reducers.addtodoReducer(df(todos),df(action));
        expect(res[0].completed).toEqual(false);
        expect(res[0].completedAt).toEqual(null);
	    expect(todos[0].text).toEqual(res[0].text);	
    });
 });
});