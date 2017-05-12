import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Todo from 'Todo';

export default class TodoList extends Component{
    render(){
        let {todos} = this.props;
        const renderTodo = () =>{
            return todos.map((todo)=>{
               return( 
                   <Todo key={todo.id} {...todo}/>
               ); 
            });
        }
        return(
               <div>
                {renderTodo()}
              </div>
        );
    }
}