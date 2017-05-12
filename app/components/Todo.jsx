import React,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class Todo extends Component{
    render(){
        let {text,id} = this.props;
        return(
               <div> 
                {id}. {text}
              </div>
        );
    }
}