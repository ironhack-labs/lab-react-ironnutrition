import React from "react";
import './index.css'

const INITIAL_VALUES = {
    name: '',
    calories: '',
    image: '',
    servings: ''
}

class AddFoodForm extends React.Component {
    state= {
        values: {...INITIAL_VALUES}
    }

    handleOnChange = (event) => {
        const {name, value} = event.target

        this.setState(prevState => {
            return {
                values: {
                    ...prevState.values,
                    [name]:value
                }
            }
        })
    }
    
    handleOnSubmit = (event)=>{
    
        event.preventDefault()
        this.props.onSubmitFood(this.state.values)
        this.setState({values:{...INITIAL_VALUES}})

    }


    render() {
    
    const {values} = this.state

    
        return (
            <div className="AddFoodForm">
            <h3>Add a food entry</h3>
          
            <form onSubmit={this.handleOnSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  value={values.name} onChange={this.handleOnChange} name="name" required
                  className="form-control" id="name" placeholder="Pizza"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input
                  required
                  type="url"
                  value={values.image} onChange={this.handleOnChange} name="image"
                  className="form-control" id="image" placeholder="https://unsplash.com/es/fotos/MQUqbmszGGM"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="calories" className="form-label">Calories</label>
                <input
                  required
                  value={values.calories} onChange={this.handleOnChange} name="calories"
                  className="form-control" id="calories" placeholder="400"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="servings" className="form-label">Servings</label>
                <input
                  required
                  value={values.servings} onChange={this.handleOnChange} name="servings"
                  className="form-control" id="servings" placeholder="1"
                />
              </div>

    
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </form>
          </div>
        )
    }
}

export default AddFoodForm