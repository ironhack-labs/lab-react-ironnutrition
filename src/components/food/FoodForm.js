import React, { Component } from 'react'

const FOOD_PATTERN = /^\d{1,4}$/;

const validations = {
    name: (value) => {
        let message;
        if(!value) {
            message = 'Please, name your food'
        }
        return message
    },

    calories: (value) => {
        let message;
        if(!value) {
            message= 'Please insert calories'
        } else if (value && !FOOD_PATTERN.test(value)) {
            message= 'Set a valid number for calories'
        }
        return message
    },

    image: (value) => {
        let message;
        if(!value) {
            message= 'Insert an image for your food'
        }
        return message
    }
}

class FoodForm extends Component {

    state = {
        food: {
        name : '',
        image: '',
        calories : '',
        quantity: 0 },

        errors: {
            name: validations.name(''),
            image: validations.image(''),
            calories: validations.calories('')
        }
    }

    handleInputChange(event) {
        const {name, value, image} = event.target;
        this.setState((prevState) => ({
            food: {
                ...prevState.food, 
                [name] : value
            },
            errors: {
                ...prevState.errors,
                [name]: validations[name] ? validations[name](value): undefined
            },
            

        }))
    }

    isFormValid() {
        const { errors } = this.state;
        return !Object.keys(errors).some(key => errors[key]  !== undefined)
    }

    handleSubmitItem(event) {
       event.preventDefault();
       if(this.isFormValid()) {
            const { food } = this.state;
            this.props.onCreateItem(food)
       }
    }

    render(){

        const { food, errors } = this.state

        return(
            <form onSubmit={(event) => this.handleSubmitItem(event)}>
                <div className="is-flex-direction-row">
                    <div>
                        <img src={food.image} alt={food.name} />
                    </div>

                    <div> 
                        <div className="field">
                            <label className="label">Food Name </label>
                            <div className="control has-icons-left has-icons-right">
                                <input name="name" className="input is-success" type="text" placeholder="Text input" value={food.name} onChange={(event) => this.handleInputChange(event)}/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-pizza-slice fa-fw"></i>
                                </span>
                                {errors.name?<span className="icon is-small is-right"><i className="fas fa-exclamation-triangle"></i></span>:<span className="icon is-small is-right"><i className="fas fa-check"></i>
                                </span>}
                                
                            </div>
                            {errors.name?<p className="help is-danger">{errors.name}</p>:''}
                        </div>

                        <div className="field">
                            <label className="label">Calories </label>
                            <div className="control has-icons-left has-icons-right">
                                <input name="calories" className="input is-danger`" type="text" placeholder="Email input" value={food.calories} onChange={(event) => this.handleInputChange(event)} />
                                <span className="icon is-small is-left">
                                <i className="fas fa-weight-hanging"></i>
                                </span>
                                {errors.calories?<span className="icon is-small is-right"><i className="fas fa-exclamation-triangle"></i></span>:<span className="icon is-small is-right"><i className="fas fa-check"></i>
                                </span>}
                            </div>
                            {errors.calories? <p className="help is-danger">{errors.calories}</p>:''}
                        </div>

                        <div className="field">
                            <label className="label">Image </label>
                            <div className="control has-icons-left has-icons-right">
                                <input name="image" className="input is-danger`" type="text" placeholder="Your url image" value={food.image} onChange={(event) => this.handleInputChange(event)} />
                                <span className="icon is-small is-left">
                                <i className="fa fa-picture-o fa-fw"></i>
                                </span>
                                {errors.image?<span className="icon is-small is-right"><i className="fas fa-exclamation-triangle"></i></span>:<span className="icon is-small is-right"><i className="fas fa-check"></i>
                                </span>}
                            </div>
                            {errors.image? <p className="help is-danger">{errors.image}</p>:''}
                        </div> 

                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>  
            </form>
        )
    }

}

FoodForm.defaultProps = {
    onCreateItem: () => {}
}

export default FoodForm