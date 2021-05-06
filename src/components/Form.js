
import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: {
                name: '',
                calories: '',
                image: '',
                quantity: 0
            },
            errors:{
                name: null,
                calories: null,
                image: null,
                quantity: null
            }
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addFood(this.state.fields);
        this.setState({
            fields: {
                name: '',
                calories:'',
                image: '',
                quantity: 0
            },
            errors:{
                name: null,
                calories: null,
                image: null,
                quantity: null
            }
        });
    }

    

    render() {
        const {fields, errors} = this.state;
        return (
           <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className='form-item'>
                <label htmlFor="name">Name</label>
                <input  className={`${errors.title ? "error-input" : ""}`} type="text" placeholder='Name' name='name' value={fields.name} />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div className='form-item'>
                <label htmlFor="calories">Calories</label>
                <input  type="number" placeholder='Calories' name='calories' value={fields.calories} />
                {errors.calories && <p style={{ color: 'red' }}>{errors.calories}</p>}
            </div>
            <div className='form-item'>
                <label htmlFor="image">Image</label>
                <input type="text" value={fields.image}  />
                {errors.image && <p style={{ color: 'red' }}>{errors.image}</p>}
            </div>
            <div className='form-item'>
                <label htmlFor="name">Quantity</label>
                <input  type="number" name='quantity' value={fields.quantity} />
                {errors.quantity && <p style={{ color: 'red' }}>{errors.quantity}</p>}
            </div>
            <button type='submit'>Add food</button>

           </form>
        )
    }
}
