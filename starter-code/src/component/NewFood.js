import React, { Component } from 'react';

class NewFood extends Component {
	state = {
    name: '',
    calories:  '',
    image: '',
    quantity: ''
	}

	handleInput = e => this.setState({[e.target.name] : e.target.value})

	render() {
    return (
      <form className="">
				<div className="field">
					<label className="label">Name</label>
					<input className="input" name="name" value={this.state.name}/>
				</div>
				<div className="field">
					<label className="label">Calories</label>
					<input className="input" name="calories" value={this.state.calories}/>
				</div>
				<div className="file">
					<label className="file-label">
						<input className="file-input" type="file" name="image" />
						<span className="file-cta">
							<span className="file-icon">
								<i className="fas fa-upload"></i>
							</span>
							<span className="file-label">
								Choose a file…
							</span>
						</span>
					</label>
				</div>
      </form>
    );
  }
}

export default NewFood;