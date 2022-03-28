import './NewForm.scss'
import React, { Component } from 'react';

const initialState = {
    image: '',
    name: '',
    calories: '',
}

class NewForm extends Component {

    state = {
        ...initialState
    }

    onSubmit = (event) => {
        const { name, calories, image } = this.state
        event.preventDefault()

        if (name && image && Number(calories) > 1) {
            this.props.addFood({
                name,
                image,
                calories: Number(calories),
            })
        }
    }

    resetForm = () => {
        this.setState({...initialState});
    }

    onHandleChange = (event) => {
        const { name, value  } = event.target

        this.setState ({
            [name]:value
        })
    }

    render(){
        const { name, calories, image } = this.state

        return(
                <form className="NewForm container mt-5 mb-5 col-10" onSubmit={this.onSubmit}>
                    <h2 className='m-4'>Add new a dish.</h2>
                    <div className="row">
                        <div className='col-12'>
                            <input type="text" className="form-control" placeholder="Name" name='name' onChange={this.onHandleChange} value={name}/>
                        </div>
                        <div className='col-6'>
                            <input type="text" className="form-control mt-3" placeholder="Calories" name='calories' onChange={this.onHandleChange} value={calories}/>
                        </div>
                        <div className='col-6'>
                            <input type="text" className="form-control mt-3" placeholder="image URL" name='image'  onChange={this.onHandleChange} value={image}/>
                        </div>
                    </div>
                    <button className='btn btn-primary mt-4'>Submit</button>

                </form>
        )
    }
}

export default NewForm