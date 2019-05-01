import React, { Component } from 'react'

export default class FoodForm extends Component {
    state = {
        form : {
            name: 'Frijoles',
            calories: 10,
            quantity: 0,
            image: "https://images-gmi-pmc.edge-generalmills.com/44fa0f19-eb50-4465-95a8-ba0276d495ab.jpg"
        },
        display: "none"
    }

    changeFormData(e, key) {
        const newState = {...this.state}
        newState.form[key] = e.target.value

        this.setState(newState);
    }

    collectFood(e) {
        e.preventDefault();
        let display = "none";
        
        this.setState({
            ...this.state,
            display: display         
        }, () => {
        this.props.newFood(this.state.form)
        })
    }

    addNewFoodBotton() {
        let display = "block";
        this.setState({
            ...this.state,
            display: display
        })
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.addNewFoodBotton()}>Add new food</button>
                <form style={{ display: this.state.display }}>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="write a name" 
                        value={this.state.form.name} 
                        onChange={(e) => this.changeFormData(e, 'name')}>
                    </input>
                    <label>Calories:</label>
                    <input 
                        type="number" 
                        name="calories" 
                        placeholder="write the calories" 
                        value={this.state.form.calories} 
                        onChange={(e) => this.changeFormData(e, 'calories')}>
                    </input>
                    <label>Image:</label>
                    <input 
                        type="text" 
                        name="image" 
                        placeholder="write a valid url" 
                        value={this.state.form.image} 
                        onChange={(e) => this.changeFormData(e, 'image')}>
                    </input>
                    <button onClick={(e) => this.collectFood(e)}>Add it!</button>
                </form>
            </React.Fragment>
        )
    }
}
