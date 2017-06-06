import expect from 'expect';
import reduxMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase,{firebaseRef} from 'index';


var createMockStore = reduxMockStore([thunk]); // this should not be shared with other test scripts
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
            todo:{
				id:'1234',
				text:'finish redux',
				completed:false,
				createdAt:123332,
			},
        }
        
        let res = actions.addtodo(action.todo);
        expect(res).toEqual(action);
    });
	
	 it('should dispatch add to do action and post to firebase',(done)=>{
		   
		 var storeInstance = createMockStore({});
		 const todoText = 'some thing to do';
		 
		  storeInstance.dispatch(actions.startAddTodo(todoText)).then(()=>{
			   var actions = storeInstance.getActions();
			   
			   expect(actions[0]).toInclude({
				  type:"ADD_TODO"
			  });
			  
			  expect(actions[0]).toInclude({
				  text:todoText
			  })
			  
			  done(); 
		  }).catch(done);
		  
		 
	 });
    
      it("should toggle show completed todos",()=>{
        let action = {
            type:"UPDATE_TODO",
		    id:'1233',
			update:{completed:false}
        }
        
        let res = actions.updateToggle(action.id,action.update);
          expect(res).toEqual(action);
    });
    
      it("should toggle todos",()=>{
        let action = {
            type:"TOGGLE_TODO_ID",
            id:1
        }
        
        let res = actions.toggleTodo(action.id);
        expect(res).toEqual(action);
    });
	  
	 it("should add todos array properly",()=>{
		let todos =[{
			id:112,
			text:"pray to God",
			createdAt:1223333,
			completed:false,
			completedAt:undefined,
		}];
		 
		 let action = {
		    type:"ADD_TODOS",
			todos
		 }
		 
		 let res = actions.addTodos(todos);
		 expect(res).toEqual(action);
	 });
     
	describe('Test with firebase',()=>{
		
		let testTodoRef; 
		
		beforeEach((done) =>{
			testTodoRef = firebaseRef.child('todo').push();
			testTodoRef.set({
				text:'something to do',
				completed:false,
				createdAt:673467,
			}).then(()=>done());
		});
		
		afterEach((done) =>{
			testTodoRef.remove().then(()=>done());
		});
		 
		it('it should update todos status and dispatch UPDATE_TODO action',(done)=>{
			let storeInstance = createMockStore({});
			const action = actions.startToggleTodo(testTodoRef.key,true);
			
			store.dispatch(action).then(()=>{
			   	 const getMockAction = storeInstance.getActions();
				  expect(getMockAction[0]).toInclude({
					  Type:"UPDATE_TODO",
					  id:testTodoRef.key,
				  })
				  
				 expect(getMockAction[0].updates).toInclude({
					 completed:true
				 });
				
				expect(getMockAction[0].updates.completedAt).toExist();
				 
			},done);
		});
	});
})