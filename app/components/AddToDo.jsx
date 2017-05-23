import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
var actions = require("actions");

export class AddToDo extends Component{
    addToDo = (e) =>{
        e.preventDefault();
        let {dispatch} = this.props;
        let newToDo = this.refs.todo.value;
        if(newToDo.match(/\d?[a-zA-z]/)){
            this.refs.todo.value = '';
             dispatch(actions.addtodo(newToDo));
        }else{
            this.refs.todo.focus();
        }
        
    }
    render(){
        return(
                 <div className = "box__footer">
                   <form onSubmit ={this.addToDo}>
                     <input type ="text" placeholder="Add to do" ref = "todo"/> 
                       <button className = "button primary expanded">
                           Add to Do
                       </button>   
                   </form>        
                 </div>
        );
    }
}


export default connect()(AddToDo);