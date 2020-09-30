import React, {Component} from 'react'

class NewForm extends Component {

    constructor(){
        super()

        this.state ={

            name:"",
            image:"",
            calories:""
           
        }
    }
    handleInputChange = e => {

        let { name } = e.target
        let value =  e.target.value

        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()

        // VALIDACIÓN

        console.log('La película está en el estado:', this.state)

        this.props.addFood(this.state) // Envío la info

        this.setState({                 // Vacío el form
            name: '',
            calories: '',
            image: ''
          
        })
    }
        render(){

            return(

                <form onSubmit={this.handleSubmit}>
                <label>name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                <br /><br />

                <label>Calories:</label>
                <input type="text" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                <br /><br />

                <label>Image:</label>
                <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                <br /><br />

                <input type="submit" value="Submit" />
            </form>

            )

        }
    }

    export default NewForm

