import React from "react"

class AddFood extends React.Component {


    state= {
        name: '',
        calories: '',
        image:'',
        showForm: false
    }

    handleSubmit = (event)  => {

        event.preventDefault();
        this.props.addFood(this.state);
        this.setState({
            name: '',
            calories: '',
            image: '',
            showForm: false
        })
    }

    handleChange = (event) => {

        const {value, name} = event.target
        const newValue = value

        this.setState({
            ...this.state,
            [name]: newValue
        })

    }

    toggleForm = () => {
        this.setState({
            ...this.state,
            showForm: !this.state.showForm
        })
    }

    

    render (){
        return(
            <div>
            {this.state.showForm && 
            <form onSubmit={(event) => this.handleSubmit(event)}>

                <label>
                    Name: <input type='text' value={this.state.name} name='name' onChange={event => this.handleChange(event)}></input>
                </label>

                <label>
                    Calories: <input type='text' value={this.state.calories} name='calories' onChange={event => this.handleChange(event)}></input>
                </label>

                <label>
                    image: <input type='text' value={this.state.image} name='image' onChange={event => this.handleChange(event)}></input>
                </label>

                <input type='submit' value='añadir comida'>

                </input>
            </form>
            }
            <button onClick={this.toggleForm}> Formulario de comida </button>
            </div>
        )
    }
}

export default AddFood