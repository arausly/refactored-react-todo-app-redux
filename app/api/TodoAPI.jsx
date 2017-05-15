import $ from 'jQuery';

module.exports ={
    setTodos:function(todos){
        if($.isArray(todos)){
            localStorage.setItem('todos',JSON.stringify(todos));
             return todos;
        }
    },
    getTodos:function(){
        let stringTodos =  localStorage.getItem('todos');
        let todos;
        
        try{
            todos = JSON.parse(stringTodos);
        }catch(error){
            todos =[];
        }
     
        if(todos instanceof Array){
            return todos;
        }else{
            return [];
        }
    }
}