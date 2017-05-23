import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
var TodoAPI = require('TodoAPI');
import Todo from 'Todo';


export class TodoList extends Component{
    render(){
		
        let {searchText,showCompleted,addtodoReducer} = this.props;
		 let todos = addtodoReducer;
        const renderTodo = () =>{
              if(todos.length === 0){
                return (
                     <p className ="box__message">Add todos here</p>
                );
            }
            return TodoAPI.filterTodos(todos,showCompleted,searchText).map((todo)=>{
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

export default connect(
    (state)=>{
       return state;
    }
)(TodoList);

