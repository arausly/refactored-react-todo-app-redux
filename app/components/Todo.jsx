import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

import {connect} from 'react-redux';
var actions = require('actions');

 export class Todo extends Component{
    render(){
        let {id,text,completed,createdAt,completedAt,dispatch} = this.props; 
         let todoClassName = completed ? 'todo todo-completed' : 'todo';
        const renderDate = () =>{       
             if(completed){
                   let message = "Completed";
                   let timestamp = completedAt;
                  return  message + moment.unix(timestamp).format(' MMM Do, YYYY @ hh:mm a');
               }else{
                  let message = 'Created';
                  let timestamp = createdAt;
                  return  message + moment.unix(timestamp).format(' MMM Do, YYYY @ hh:mm a');
               }
        }
        return(
               <div className ={todoClassName} onClick ={()=>{
                      dispatch(actions.startToggleTodo(id,!completed));
                }}> 
                  <div>      
                    <input type = "checkbox" checked={completed}/>
                  </div> 
                  <div>    
                    <p>{text}</p>
                    <p className="todo_subtext">{renderDate()}</p>
                  </div>     
              </div> 
        );
    }
}



export default connect()(Todo);