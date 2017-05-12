import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import TodoList from 'TodoList';
import AddToDo from 'AddToDo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state ={
            fromInput:'',
            fromCheck:false,
            todos:[
                {
                    id:uuid(),
                    text:'Finish Todo Application',
                },
                {
                    id:uuid(),
                    text:'Finish Redux Tutorial'
                },
                 {
                    id:uuid(),
                    text:'Watch Logan',
                },
                {
                    id:uuid(),
                    text:'Start javascript OOP tutorial'
                }
            ]
        }
    }
    handleToDo = (text) =>{
        this.setState({
           todos:[
               ...this.state.todos,
               {
                   id:uuid(),    
                   text:text,    
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
    render(){
        let {todos} = this.state;
        return(
            <div>
                <TodoSearch onSearch={this.filter}/>
                <TodoList todos={todos}/>
                <AddToDo passToDo = {this.handleToDo}/>
            </div>    
        );
    }
}