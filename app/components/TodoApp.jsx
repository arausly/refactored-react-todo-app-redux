import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import TodoList from 'TodoList';

export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state ={
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
    render(){
        let {todos} = this.state;
        return(
            <div>
                <TodoList todos={todos}/>
            </div>    
        );
    }
}