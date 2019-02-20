import React, { Component } from "react";

export default class Search extends Component {
    state = {
        name: undefined
        
    }

 handlerName = (e) => {
     let cloneState = { ...this.state, name: e.target.value };

     this.setState(cloneState)
     this.props.busqueda(e,this.state.name)
 }

    render() {
        return (
            <div>
               
                    <h1>Seach</h1>
                   
                    <input type="text" onChange={(e) => this.props.busqueda(e)} className="input search-bar" name="search" placeholder="Search" value={this.state.name}></input>
            </div>
        )
    }
}
