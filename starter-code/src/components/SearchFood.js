import React, { Component } from 'react';

class SearchFood extends Component {
	state = {
    name: '',
	}
	
	handleInput = e => {
		this.setState({[e.target.name] : e.target.value})
		
		this.props.search(this.state.name)
	}

	render() {
    return (
      <form onSubmit={ e => e.preventDefault()}>
				<div className="field">
					<input 
						placeholder="Food!" 
						className="input" 
						name="name" 
						value={this.state.name}
						onChange={this.handleInput}
						/>
				</div>
      </form>
    );
  }
}

export default SearchFood;
