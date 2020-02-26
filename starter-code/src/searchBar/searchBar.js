import React from 'react';

export default class SearchBar extends React.Component{

    state = {
        name: ''
    }

   /*  updateSearch(e, name) {
        this.setState({
            ...this.state,
            name: e.target.value

            
        });  

        
    } */

    render(){
        return(
        <div className="control">
            <input className="input" type="text" placeholder="Search meal" /* onChange={(e, name) => this.updateSearch(e, name)} */ value={this.props.value} onChange={this.props.onChange}/>      
        </div>
        );
    }
}


