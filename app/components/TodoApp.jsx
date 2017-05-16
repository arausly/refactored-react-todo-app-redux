import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import uuid from 'node-uuid';
import moment from 'moment';


import TodoList from 'TodoList';
import AddToDo from 'AddToDo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';


export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state ={
            fromInput:'',
            fromCheck:false,
            todos:TodoAPI.getTodos()
        }
    }
    componentDidUpdate(){
        TodoAPI.setTodos(this.state.todos);
    }
    handleToDo = (text) =>{
        this.setState({
           todos:[
               ...this.state.todos,
               {
                   id:uuid(),    
                   text:text,  
                   completed:false,
                   createdAt:moment().unix(),
                   completedAt:undefined,
               }
               
           ] 
        });
    }
    filter = (fromCheck,fromInput) =>{
        this.setState({
            fromInput:fromInput.toLowerCase(),
            fromCheck:fromCheck
        });
    }
    handleToggle = (id) =>{
      var newTodos =this.state.todos.map((todo)=>{
         if(todo.id === id){
             todo.completed = !todo.completed;
             todo.completedAt = todo.completed ? moment().unix() : undefined;
         } 
          return todo;
      });
        this.setState({todos:newTodos});
    }
    render(){
        let {todos,fromInput,fromCheck} = this.state;
        let filteredTodos = TodoAPI.filterTodos(todos,fromCheck,fromInput);
        return(
            <div>
                <h1 className ="page-title">Todo App</h1>
                 <div className="row">
                     <div className=" column medium-6 large-5 small-centered small-12">
                         <div className ="box">
                            <TodoSearch onSearch={this.filter}/>
                            <TodoList todos={filteredTodos} onToggle ={this.handleToggle}/>
                            <AddToDo passToDo = {this.handleToDo}/>
                         </div>     
                     </div>       
                 </div>     
            </div>    
        );
    }
}