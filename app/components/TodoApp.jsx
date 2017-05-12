import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import TodoList from 'TodoList';
import AddToDo from 'AddToDo';
import TodoSearch from 'TodoSearch';

export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state ={
            fromInput:'',
            fromCheck:false,
            todos:[
                {
                    id:1,
                    text:'Finish Todo Application',
                },
                {
                    id:2,
                    text:'Finish Redux Tutorial'
                },
                 {
                    id:3,
                    text:'Watch Logan',
                },
                {
                    id:4,
                    text:'Start javascript OOP tutorial'
                }
            ]
        }
    }
    handleToDo = (stext) =>{
        alert(`new text ${text}`);
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