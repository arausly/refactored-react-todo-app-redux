import expect from 'expect';

import TodoAPI from 'TodoAPI';


describe('TodoAPI',()=>{
    beforeEach(()=>{
       localStorage.removeItem('todos');
    });
    
   it('should exist',()=>{
       expect(TodoAPI).toExist(); 
   }); 
    
   describe('evaluating the set todos method',()=>{
        it('should set todos value for valid data',()=>{
             let todos = [{
                 id:12,
                 text:'watch 24 videos',
                 completed:false
             }];
            
            TodoAPI.setTodos(todos);
            let actual = JSON.parse(localStorage.getItem('todos'));
            expect(actual).toEqual(todos);
        });
      
       it('should not set todos value for invalid data',()=>{
              let invalidTodos = {a:'b'};
              TodoAPI.setTodos(invalidTodos);
             let actual = JSON.parse(localStorage.getItem('todos'));
             expect(actual).toBe(null);
       });
   });
    
   describe('evaluating the get todos method',()=>{
        it('should get todos for valid data',()=>{
            let todos =[{
                id:12,
                text:'finish api test',
                completed:false,
            }];
            localStorage.setItem('todos',JSON.stringify(todos));
            let actualtodos =  TodoAPI.getTodos();;
            expect(actualtodos).toEqual(todos);
        });
       it('should return an empty array for bad data',()=>{
            let actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);  
       });
    });
    
       describe("filterTodos",()=>{ 
       let todos = [{
              id:1,
              text:'finish 21 videos',
              completed:true
            },
             {
                id:3,
                text:'finish todo application',
                completed:false
             }];
           
        it('should render all completed todos when true',()=>{
               let filteredTodos = TodoAPI.filterTodos(todos,true,'');
              expect(filteredTodos.length).toBe(2);
       });
           
     it('should render only  uncompleted todos when true',()=>{
             let filteredTodos = TodoAPI.filterTodos(todos,false,'');
             expect(filteredTodos.length).toBe(1);
       });
           
     it('should sort by completed status',()=>{
           let filteredTodos =  TodoAPI.filterTodos(todos,true,'');
            let completed = filteredTodos[0].completed;
            expect(completed).toBe(false);
         });
           
     it('should render all todos for empty search text',()=>{
           let filteredTodos = TodoAPI.filterTodos(todos,true,'');
             expect(filteredTodos.length).toBe(2);
         });
      it('should one of the todos for string search text',()=>{
           let filteredTodos = TodoAPI.filterTodos(todos,true,'finish todo');
             expect(filteredTodos.length).toBe(1);
         });       
       });
});