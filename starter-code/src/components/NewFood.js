import React, { Component } from 'react'



class NewFood extends Component {
    constructor(props) {
        super(props)
        this.state = {

            name: '',
            calories: '',
            image: '',
            quantity: 0
        }
    }
    

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.handleForm()
        this.props.includeFood(this.state)
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value });
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className='form-group'>
                    <label htmlFor='input1'>Nombre</label>
                    <input name='name' type='text' className='form-control' id='input1' value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='input2'>Calorias</label>
                    <input name='calories' type='number' className='form-control' id='input2' value={this.state.calories} onChange={this.handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='input3'>Imagen</label>
                    <input name='image' type='text' className='form-control' id='input3' value={this.state.image} onChange={this.handleChange} />
                </div>

                <button onClick={this.handleForm} type='submit' className='btn btn-dark'>Añadir comida</button>
            </form>
        )
    }
}

export default NewFood