import firebase,{firebaseRef} from 'index';
import moment from 'moment';


let setSearchText = (searchText) =>{
    return{
        type:"SET_SEARCH_TEXT",
        searchText
    }
}

let addtodo = (todo) =>{
    return{
        type:"ADD_TODO",
        todo
    }
}

let startAddTodo = (text) =>{
	 return (dispatch,getState)=>{
		 var todo = {    
                   text, 
                   completed:false,
                   createdAt:moment().unix(),
                   completedAt:null,
               }
		 
	
	let todoRef =  firebaseRef.child('todo').push(todo);
		
		return todoRef.then(()=>{
			 dispatch(addtodo({
				 ...todo,
				 id:todoRef.key,
			 })); 
		 });
	 }
}

let addTodos = (todos) =>{
	return {
		type:"ADD_TODOS",
		todos
	}
}

let toggleShowCompleted = () =>{
     return{
          type:"TOGGLE_SHOW_COMPLETED",
     }
}


let updateToggle= (id,updates) =>{
    return{
        type:"UPDATE_TODO",
        id,
		updates
    }
}

let startToggleTodo = (id,completed) =>{
	 return (dispatch,getState) =>{
		 let todoRef = firebaseRef.child(`todo/${id}`)
		 let updates = {
			 completed,
			 completedAt:completed ? moment().unix() : null
		 };
		 
		  todoRef.update(updates).then(()=>{
		  dispatch(updateToggle(id,updates))
	 });
}

}




export {
         setSearchText,
         addtodo,
		 addTodos,
         toggleShowCompleted,
         updateToggle,
		 startAddTodo,
		 startToggleTodo,
        }