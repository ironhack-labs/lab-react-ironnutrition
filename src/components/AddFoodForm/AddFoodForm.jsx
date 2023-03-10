import { Component } from "react";


const INITIAL_VALUES = {
    name: '',
    image: '',
    calories: '',
    servings: '',
    totalCalories: '',
}

export default class AddFoodForm extends Component {
    state = {
        values: {...INITIAL_VALUES},
        errors: {
    
        }
    }

    onChange = (event) => {
        const { name, value } = event.target;
    
        this.setState(prevState => {
          return {
            values: {
              ...prevState.values,
              [name]: value
            }
          }
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
    
        this.props.onSubmitFood(this.state.values)
        this.setState({ values: {...INITIAL_VALUES} })
    }


    render() {
        const { values } = this.state;
        return (
            

            <>
                <h3>Add a new food</h3>
                <form onSubmit={this.onSubmitFood}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                        value={values.name} onChange={this.onChange} name="name" required
                        className="form-control" id="name" placeholder="food"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input requiredtype="url" value={values.image} onChange={this.onChange} name="image"
                        className="form-control" id="image" placeholder="image "
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="calories" className="form-label">Calories</label>
                        <input  required type="number" value={values.calories} onChange={this.onChange} name="calories"
                        className="form-control" id="calories" placeholder="number"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="servings" className="form-label">Servings</label>
                        <input required type="number" value={values.servings} onChange={this.onChange} name="servings"
                        className="form-control" id="servings" placeholder="servings"
                        />
                    </div>
                
                    <div className="mb-3">
                        <label htmlFor="totalCalories" className="form-label">Total Calories</label>
                        <input required type="number" value={values.totalCalories} onChange={this.onChange} name="total Calories"
                        className="form-control" id="totalCalories" placeholder="total"
                        />
                    </div>

                    <button type="submit" className="btn btn-info mb-5 mt-2">
                        Submit
                    </button>
                </form>
            </>

        
        )
    }


}