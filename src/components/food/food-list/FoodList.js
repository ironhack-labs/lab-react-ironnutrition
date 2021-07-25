import React from 'react';
import FoodBox from '../food-box/FoodBox';
import foods from '../../../data/foods.json';
import './FoodList.css';
import FoodForm from '../food-form/FoodForm';

class FoodList extends React.Component {

    state = {
        foods: [],
        form: false,
    }

    handleShowForm() {
        this.setState({
            form: !this.state.form
        })
    }

    handleCreateFood(food) {
        this.setState(({ foods }) => ({
          foods: [food, ...foods]
        }))
      }
    render() {
        return (
            <>
                {!this.state.form && <button className="btn btn-primary my-5" onClick={() => this.handleShowForm()}>Create New Food</button>}
                {this.state.form && <FoodForm />}
                <div className="row">         
                    <div className="col-6">
                        { foods.map((food) => (
                        <FoodBox 
                            name={food.name}
                            calories={food.calories}
                            image={food.image}
                            quantity={food.quantity}
                        />              
                        ))}
                    </div> 
                </div>                
            </>
        )
    }
}

export default FoodList;