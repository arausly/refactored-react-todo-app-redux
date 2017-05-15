import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Todo extends Component{
    render(){
        let {id,text,completed} = this.props;
        return(
               <div onClick ={()=>{
                    this.props.onToggle(id);
                }}> 
                <input type = "checkbox" checked ={completed}/>
                {text}
              </div>
        );
    }
}

Todo.propTypes = {
    id:PropTypes.string.isRequired,
    onToggle:PropTypes.func.isRequired
}