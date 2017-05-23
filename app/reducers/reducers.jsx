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
         return state === false ? true :false;
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
               {
                   id:uuid(),    
                   text:action.newTodo,  
                   completed:false,
                   createdAt:moment().unix(),
                   completedAt:undefined,
               }
        ];  
        case "TOGGLE_TODO_ID":
          return state.map((todo)=>{
             if(todo.id === action.id){
                 let changeCompleted = !todo.completed;
                
                 return {
                     ...todo,
                      completed:changeCompleted,
                      completedAt:changeCompleted ? moment().unix()  : undefined
                 };
                 
             }else{
				 return todo;
			 }
          });    
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