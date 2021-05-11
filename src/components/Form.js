
import React, { Component } from 'react';
import  './Formstyle.css';

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

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            fields:{
                ...this.state.fields,
                [name]: value
            },
        })
    }

    render() {
        const {fields, errors} = this.state;
        return (
           <form  className="mb-4" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="field">
                <label  className="label" htmlFor="name">Name</label>
                <input  className="input" type="text" placeholder='Name' name='name' value={fields.name} onChange={(e) => this.handleChange(e)}/>
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div className="field">
                <label className="label" htmlFor="calories">Calories</label>
                <input className="input" type="text" placeholder='Calories' name='calories' value={fields.calories} onChange={(e) => this.handleChange(e)} />
                {errors.calories && <p style={{ color: 'red' }}>{errors.calories}</p>}
            </div>
            <div className="field">
                <label className="label" htmlFor="image">Image</label>
                <input className="input" type="file" accept="image/*,.pdf" value={fields.image}  onChange={(e) => this.handleChange(e)}/>
                {errors.image && <p style={{ color: 'red' }}>{errors.image}</p>}
            </div>
            <div className="field">
                <label className="label" htmlFor="name">Quantity</label>
                <input   className="input" type="number" name='quantity' value={fields.quantity} onChange={(e) => this.handleChange(e)}/>
                {errors.quantity && <p style={{ color: 'red' }}>{errors.quantity}</p>}
            </div>
            <button className="button is-success" type='submit'>Add food</button>

           </form>
        )
    }
}
