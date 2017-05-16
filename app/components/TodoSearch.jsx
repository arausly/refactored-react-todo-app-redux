import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class TodoSearch extends Component{
    listenForChange =()=>{
        let checkbox = this.refs.showCompleted.checked;
        let searchInput = this.refs.searchTxt.value;
        this.props.onSearch(checkbox,searchInput);
    }
    render(){
        return(
             <div className ="box__header">
                <div>
                   <input type ="text" placeholder ="Search your todos" ref = "searchTxt" onChange={this.listenForChange}/>
                </div>
                <div>
                   <label htmlFor="check">
                    <input id="check" type="checkbox" ref="showCompleted" onChange ={this.listenForChange}/>
                    Show completed todos
                   </label>
                </div>             
            </div>    
        );
    }
} 


TodoSearch.propTypes = {
    onSearch:PropTypes.func.isRequired,
}