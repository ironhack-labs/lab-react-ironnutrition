import React, { Component } from 'react'

export class Search extends Component {
    state = {
        textarea:""


    }
    (event) {
        console.log(event.target.value)
        
        this.setState({ [name]: value });
      }
    
      handleSubmit = event => {
        const { textarea } = this.state;
        alert(`${textarea}`);
      };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Search "
                    name='textarea'
                    value={this.state.textarea}
                    onChange={e => this.handleChange(e)}
                    />
                
                </form>
                
            </div>
        )
    }
}

export default Search
