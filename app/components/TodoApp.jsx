import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddToDo from 'AddToDo';
import TodoSearch from 'TodoSearch';


export default class TodoApp extends Component{
    render(){
        return(
            <div>
                <h1 className ="page-title">Todo App</h1>
                 <div className="row">
                     <div className=" column medium-6 large-5 small-centered small-12">
                         <div className ="box">
                            <TodoSearch/>
                            <TodoList/>
                            <AddToDo/>
                         </div>     
                     </div>       
                 </div>     
            </div>    
        );
    }
}