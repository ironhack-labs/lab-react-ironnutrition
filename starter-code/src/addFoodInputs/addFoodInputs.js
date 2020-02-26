import React from 'react';


export default class AddFoodInputs extends React.Component {

    state = {
        name: '',
        calories: 0,
        image: '',
        quantity: 1,
    }

    updateForm(e, field) {
        this.setState({
            ...this.state,
            [field]: e.target.value
        });   
 
    }

    render() {
        return (
            <form className="inputsDiv">
                <input type="text" placeholder='Meal' value={this.state.name} onChange={e => this.updateForm(e, "name")} />
                <input type="number" placeholder='calories' value={this.state.calories} onChange={e => this.updateForm(e, "calories")} />
                <input type="text" placeholder='image url' value={this.state.image} onChange={e => this.updateForm(e, "image")} />
                <input type="submit" onClick={(e) => this.props.clickToAdd(e, this.state)}/> 
            </form>
        )
    }
}

