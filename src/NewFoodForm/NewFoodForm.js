import React from 'react';



class NewFoodForm extends React.Component {

    state = {
        name: '',
        calories: "",
        image: ''
    };

handleInput = (event) => {
const {name, value} = event.target;

this.setState ( { [name] : value } )
}

handleSubmit = (event) => {
    event.preventDefault();

    const newFood = this.state;

    this.props.addFood(newFood);

    this.setState ( { name: "", calories: "", image: "" } );
}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input  type="text" name="name" value={this.state.name} onChange={this.handleInput}/>
                    <br/>

                    <label>Calories</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={this.handleInput}/>
                    <br/>

                    <label>Image</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleInput}/>
                    <br/>

                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}


export default NewFoodForm;