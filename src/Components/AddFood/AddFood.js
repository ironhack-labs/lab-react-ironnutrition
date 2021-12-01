import React from 'react';
import './AddFood.css'


class AddFood extends React.Component {

    constructor() {
        super()
        
        this.state= {
            name: "",
            calories: 0,
            image: "",
        }
    }


    handleChange = (e) => {
        let {name, value} = e.currentTarget

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()

        this.props.addNewFood(this.state)

        this.setState({
            name: "",
            calories: 0,
            image: "",
        })
    }


  


    render() {
        return(
            <>
                <form onSubmit={this.handleSubmit}>

                    <label>
                        Name: <input onChange={this.handleChange} value={this.state.name} type='text' name='name' />
                    </label>

                    <label>
                        Calories: <input onChange={this.handleChange} value={this.state.calories} type='number' name='calories' />
                    </label>

                    <label>
                        Image: <input onChange={this.handleChange} value={this.state.image} type='text' name='image' />
                    </label>

                    <input type='submit' value='Add new food' />

                </form>
            </>
        )
    }
    

}


export default AddFood