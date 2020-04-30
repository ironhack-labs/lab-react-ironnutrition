import React, {Component} from 'react';
import 'bulma/css/bulma.css';


class AddFood extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            name: "",
            calories: 0,
            image: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        
         let {name, value} = e.target;
 
         this.setState({
             [name]: value,
         });
     }


    handleSubmit(e) {
    
        e.preventDefault();
        const { addNewFood , showAddForm} = this.props;
        
        //SENDING DATA TO PARENT COMPONENT
        addNewFood(this.state);
        
        
        this.setState(
            {
                name: "",
                calories: 0,
                image: "",
            }
        )

        showAddForm();
    } 

    render() {
        return(

            <form onSubmit={this.handleSubmit}>

            <label htmlFor='name'>Name: </label>
            <input 
                type='text' 
                name='name' 
                value={this.state.name} 
                onChange={this.handleChange}
            />
            <br />
            <label htmlFor='calories'>Calories: </label>
            <input 
                type='number' 
                name='calories' 
                value={this.state.calories} 
                onChange={this.handleChange}
            /> 
            <br />
            <label htmlFor='image'>Image: </label>
            <input 
                type='text' 
                name='image' 
                value={this.state.image} 
                onChange={this.handleChange}
            />
            <br />
            <button>SAVE FOOD</button>
        </form>

        );
    }


}

export default AddFood;