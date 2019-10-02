import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                        <form className="search-form" id="test">
       

        <input
          type="search"
          name="foodName"
          placeholder="Search foods"
          onChange={e => this.props.updateSearchFormData(e)}
        ></input>
        


        
      </form>
                
            </div>
        )
    }
}
