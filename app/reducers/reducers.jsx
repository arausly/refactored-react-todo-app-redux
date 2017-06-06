import uuid from 'uuid';
import moment from 'moment';

let searchText = (state = '',action) =>{
    switch(action.type){
      case "SET_SEARCH_TEXT":
         return action.searchText;
      break;        
      default:
          return state;
      break;        
    }
}


let showCompleted = (state = false,action) =>{
    switch(action.type){
        case "TOGGLE_SHOW_COMPLETED":
         return !state;
        break;
        default:
         return state;
        break;    
    }
}

let addtodoReducer = (state =[],action) =>{
    switch(action.type){
      case "ADD_TODO":
        return [
            ...state,
            action.todo,
        ];  
        case "UPDATE_TODO":
          return state.map((todo)=>{
             if(todo.id === action.id){ 
                 return {
                     ...todo,
                     ...action.updates 
                 };
                 
             }else{
				 return todo;
			 }
          });   
		case "ADD_TODOS":  
		 return [
			...state,
			...action.todos
		 ];
       break;
       default:
        return state;
       break;     
    }
}
export{
         searchText,
         showCompleted,
         addtodoReducer,
};