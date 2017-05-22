let setSearchText = (searchText) =>{
    return{
        type:"SET_SEARCH_TEXT",
        searchText
    }
}

let addtodo = (newTodo) =>{
    return{
        type:"ADD_TODO",
        newTodo
    }
}

let toggleShowCompleted = () =>{
     return{
          type:"TOGGLE_SHOW_COMPLETED",
     }
}

let toggleTodo = (id) =>{
    return{
        type:"TOGGLE_TODO_ID",
        id
    }
}


export {
         setSearchText,
         addtodo,
         toggleShowCompleted,
         toggleTodo
        }