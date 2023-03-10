import { Component } from 'react';

const INITIAL_VALUES = {
    image:'',
    name:'',
    calories:'',
    servings: ''
}

class AddFoodForm extends Component {
    state = {
        values : {...INITIAL_VALUES}
    }

    handleOnChange = (event) => {
        const { name, value } = event.target;

        this.setState(prevState => {
            return {
                values: {
                    ...prevState.values,
                    [name]: value
                }
            }
        })

        console.log(this.state.values)
    } 

    render() { 
        const { values } = this.state;

        return ( 
            <div className='AddFoodForm'>
                <h3>Add a new food</h3>
                <form>
                    <div className='add-food-form-content'>
                        <label htmlFor='name'>Name</label>
                        <input name='name' value={values.name} type="text" onChange={this.handleOnChange} />
                        <label htmlFor='image'>Image</label>
                        <input name='image' value={values.image} type="text" onChange={this.handleOnChange} />
                        <label htmlFor='calories'>calories</label>
                        <input name='calories' value={values.calories} type="text" onChange={this.handleOnChange} />
                        <label htmlFor='serving'>Serving</label>
                        <input name='servings' value={values.serving} type="text" onChange={this.handleOnChange} />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default AddFoodForm;