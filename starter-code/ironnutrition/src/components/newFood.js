import React, {Component} from 'react'

class addFood extends Component{
    constructor(props){
        super(props)
        this.state={
            name: "",
            calories: 0,
            image: "",
            quantity: 0,
        }
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.includeFood(this.state)
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    render(){
        return(
            <div>
            <h1>New Food Form</h1>
            <form onSubmit={this.handleFormSubmit}>
                <div className='form-group'>
                    <label htmlFor='input1'>Name</label>
                    <input name='name' type='text' id='input1' value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='input2'>Calories</label>
                    <input name='calories' type='number' id='input2' value={this.state.calories} onChange={this.handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='input3'>Images</label>
                    <input name='image' type='text' id='input3' value={this.state.image} onChange={this.handleChange} />
                </div> 
                <button type='submit'>Send</button>
            </form>
            </div>
        )
    }
}

export default addFood