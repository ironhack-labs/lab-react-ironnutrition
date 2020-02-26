import React, {Component} from "react"
import shortid from "shortid"

class FoodBoxForm extends Component {

    state = {
        name: "",
        calories: 0,
        image: "",
        quantity: 0

    }

    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name]:value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const newFood = this.state;
        newFood.id = shortid.generate();

        this.props.addOneFood(newFood);

        this.props.toggleTheForm();

        this.setState({
            name: "",
            calories: 0,
            image: "",
            quantity: 0

        })

    }



    render () {
        return (


            <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>name</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />

                        <label>calories</label>
                        <input
                            type="text"
                            name="calories"
                            value={this.state.calories}
                            onChange={this.handleChange}
                        />                        
                        <label>image</label>
                        <input
                            type="text"
                            name="image"
                            value={this.state.image}
                            onChange={this.handleChange}
                        />                        
                        
                        <button type="submit"> Submit </button>
                    </form>
            </div>

        )
    }

}

export default FoodBoxForm;