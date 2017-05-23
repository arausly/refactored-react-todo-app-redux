import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
var actions = require('actions');

export  class TodoSearch extends Component{
    render(){
		let {dispatch,showCompleted,searchText} = this.props
        return(
             <div className ="box__header">
                <div>
                   <input type ="text" placeholder ="Search your todos" ref = "searchTxt" value={searchText} onChange={()=>{
							let searchText = this.refs.searchTxt.value;
						    	dispatch(actions.setSearchText(searchText));
						}}/>
                </div>
                <div>
                   <label htmlFor="check">
                    <input id="check" type="checkbox" ref="showCompleted" checked={showCompleted} onChange ={()=>{
							  dispatch(actions.toggleShowCompleted());
						   }}/>
                    Show completed todos
                   </label>
                </div>             
            </div>    
        );
    }
} 

export default connect(
 (state)=>{
	 return{
		showCompleted:state.showCompleted,
		searchText:state.searchText,
	 }
 }
)(TodoSearch);