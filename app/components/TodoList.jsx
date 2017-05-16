import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Todo from 'Todo';
import PropTypes from 'prop-types';

export default class TodoList extends Component{
    render(){
        let {todos} = this.props;
        const renderTodo = () =>{
              if(todos.length === 0){
                return (
                     <p className ="box__message">Add todos here</p>
                );
            }
            return todos.map((todo)=>{
               return( 
                   <Todo key={todo.id} {...todo} onToggle ={this.props.onToggle}/>
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
    
TodoList.propTypes ={
    onToggle:PropTypes.func.isRequired
}