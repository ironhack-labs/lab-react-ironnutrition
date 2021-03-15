
import { Component } from 'react';
import foods from '../../foods.json';

class AddFood extends Component {

    state = { 
        showing: false,
        food: {
            name: '',
            calories: 0,
            image: '',
            quantity: 0
        }
     };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState((state, props) => ({
            showing: false,
            food: this.addToFoodList(this.food)

        }));

    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState((state, props) => ({
          food: {
            ...state.food,
            [name]: value
          }
        }));
      }

    addToFoodList(food){
        foods = {...foods, food};
    }

    render() {

        const { food, showing } = this.state;
        

        return (
            <div>
                <button className="button" onClick={() => this.setState({ showing: !showing })}>Add Food</button>
                {
                    showing ?
                        <form onSubmit={this.handleSubmit} >
                            <div className="field">
                                <span className="span">Name</span>
                                <input name="name" type="text" className='input'
                                    value={food.name} onChange={this.handleChange} />
                            </div>

                            <div className="field">
                                <span className="span">Calories</span>
                                <input name="calories" type="number" className='input'
                                    value={food.calories} onChange={this.handleChange} />
                            </div>

                            <div className="field">
                                <span className="span">Image</span>
                                <input name="image" type="file" className='input'
                                    value={food.image} onChange={this.handleChange} />
                            </div>

                            <div className="field">
                                <span className="span">Quantity</span>
                                <input name="quantity" type="number" className='input'
                                    value={food.quantity} onChange={this.handleChange} />
                            </div>


                            <button className="button" type="submit" >Create food</button>
                        </form>
                    : null
                }

            </div>

        );
    }


}

export default AddFood
