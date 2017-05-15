import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import uuid from 'node-uuid';


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
                   completed:false
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
         } 
          return todo;
      });
        this.setState({todos:newTodos});
    }
    render(){
        let {todos} = this.state;
        return(
            <div>
                <TodoSearch onSearch={this.filter}/>
                <TodoList todos={todos} onToggle ={this.handleToggle}/>
                <AddToDo passToDo = {this.handleToDo}/>
            </div>    
        );
    }
}