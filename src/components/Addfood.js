
import { Component } from "react";

export default class AddFood extends Component {

    state = {
        name: "",
        image: "",
        calories: 0,
    };
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    onSubmitClick = () => {
        this.props.addFoodSubmit(this.state)


    }

    render() {
        return (
            <div className="Addfood">
                <label className="label">Name: </label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" name="name" value={this.state.name} onChange={this.onChange} />
                </div>
                <label className="label">Calories: </label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" name="calories" value={this.state.calories} onChange={this.onChange} />
                </div>
                <label className="label">Image: </label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" name="image" value={this.state.image} onChange={this.onChange} />
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" onClick={this.onSubmitClick}>
                            Submit
                         </button>
                    </div>
                </div>

            </div>
        )
    };


};



