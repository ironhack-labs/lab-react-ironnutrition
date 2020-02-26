import React, {Component}  from 'react'

class AddFood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: "",
                calories: 0,
                image: "",
                quantity: 0
            }
        }
    }

    inputHandler = e => {
        const {name, value}= e.target

        this.setState({
            form:{...this.state.form, [name]: value}
        })
    }

    addFormHandler=e=>{
        e.preventDefault()

        this.props.createFood(this.state.form)

    }


    render() {
        return(
            <form onSubmit={this.addFormHandler}>
                <label>Name</label>
                <input name="name" type="text" value={this.state.form.name} onChange={this.inputHandler}></input>
                <br></br>

                <label>Calories</label>
                <input name="calories" type="number" value={this.state.form.calories} onChange={this.inputHandler}></input>
                <br></br>

                <label>Image</label>
                <input name="image" type="text" value={this.state.form.image} onChange={this.inputHandler}></input>
                <br></br>

                <button>Add</button>
            </form>
        )
    }
}



export default AddFood