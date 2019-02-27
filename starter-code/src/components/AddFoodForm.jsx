import React, {Component} from 'react'

class AddFoodForm extends Component {
	state = {
		image: "",
		name: "",
		calories: null,
		quantity: 1,
	}

	submitting = (e) => {
		e.preventDefault()
		console.log(e) //HOW CAN I GET FROM HERE THE INPUT NAMES IF WHAT I HAVE IS THE BUTTON
	}

	render() {
		return (
				<div className="field">
					<form>
						<div className="control">
							<input name="image" className="input is-small" type="text" placeholder="Photo URL" />
							<input name="name" className="input is-small" type="text" placeholder="Name" />
							<input name="calories" className="input is-small" type="number" placeholder="Calories" />
						</div>
						<div className="control">
							<input className="button is-primary" onClick={this.submitting} type="submit" value="Add"/>
						</div>
					</form>
				</div>
		)
	}
}

export default AddFoodForm