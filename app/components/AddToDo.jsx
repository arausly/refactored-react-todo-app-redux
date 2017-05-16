import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class AddToDo extends Component{
    addToDo = (e) =>{
        e.preventDefault();
        let newToDo = this.refs.todo.value;
        if(newToDo.match(/\d?[a-zA-z]/)){
            this.refs.todo.value = '';
            this.props.passToDo(newToDo);
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


AddToDo.propTypes ={
    passToDo:PropTypes.func.isRequired
}