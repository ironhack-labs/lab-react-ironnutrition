import React from 'react'
import 'bulma/css/bulma.css';

class AddFood extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            foodName: '',
            calories: '',
            image: '',
            quantity: '',
            visible: false
        }
    }


    handleInputChange(event){
        let {name, value} = event.target;
        this.setState({[name]: value});
    }

    getDisplay() {
        return this.state.visible === false ? 'none' : 'initial'
    }

    toggleAddButton() {
        this.setState({visible: !this.state.visible})
    }

    handleFormSubmit(event) {

        event.preventDefault();

        this.props.addFoodToList(this.state);     
         
        this.setState({
            foodName: '',
            calories: '',
            image: '',
            quantity: '',
            visible: false
        })

        
    }


    render() {
        return(
            <React.Fragment>
                <button onClick={() => this.toggleAddButton()}>Add Food: {`${this.state.visible ? 'hide' : 'show'}`}</button>
                <br/><br/>
                <form style={{display: `${this.getDisplay()}`}} onSubmit={event => {this.handleFormSubmit(event)}}>
                    <label>Name</label>
                    <input type="text" name="foodName" value={this.state.foodName} onChange={event => this.handleInputChange(event)}/>
                    <label>Calories</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={event => this.handleInputChange(event)}/>
                    <label>Quantity</label>
                    <input type="text" name="quantity" value={this.state.quantity} onChange={event => this.handleInputChange(event)}/>
                    <label>Image</label>
                    <input type="text" name="image" value={this.state.image} onChange={event => this.handleInputChange(event)}/>
                    <button>Submit</button>
                </form>
            </React.Fragment>
            
        );
    }
}

export default AddFood;