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
});