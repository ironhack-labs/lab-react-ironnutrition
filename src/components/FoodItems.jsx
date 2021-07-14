import React, { Component } from 'react'
import AddForm from './AddForm'
import FoodBox from './FoodBox'
import 'bulma/css/bulma.css';

class FoodItems extends Component {


    state = {
        showForm: false
    }

    handleClick = () => {
        this.setState({
            showForm: true
        })
    }

    handleAddFood = (event) => {
  
        event.preventDefault();
        this.setState({
            showForm: false
        })
    }

    render() {
       
        const {foods, handleAddTotal} = this.props
        const {showForm} = this.state

        return (
            <div>
                List
               
                {
                    showForm ? <AddForm onAddFood={this.handleAddFood} /> : <button onClick={this.handleClick} >Show Form</button>
                }
                
                {
                    foods.map((foods, i) => {
                        return <FoodBox
                        key={i} 
                        myFood={food}
                        handleAddTotal={handleAddTotal} 
                        
                        />
                    })  
                }
            </div>
        )
    }
}

export default FoodItems