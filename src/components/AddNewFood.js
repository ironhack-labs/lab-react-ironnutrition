import React from 'react'

class AddFood extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            showForm: false,
            name: '',
            calories: 0,
            image:''
        }
    }

    

    handleChange = (event) => {
        const key = event.target.name
        const val = event.target.value
        this.setState({
            [key]: val
        })
    }

    handleFormSubmission = (e)=>{
        e.preventDefault()
        this.props.addFood(this.state)
        this.setState({
            showForm: false,
            name: '',
            calories: 0,
            image:''
        })

    }


    displayForm = () =>{
        const newShowForm = ! this.state.showForm
        this.setState({
            showForm: newShowForm
        })
    }

    render(){
        const formStyle = {
            display: this.state.showForm ? "block" : "none"
        }
        return(
            <div>
                <button onClick={this.displayForm}>{this.state.showForm ? "Hide Form" : "Show Form"}</button>
                <form onSubmit={this.handleFormSubmission} style={formStyle}>
                    <label>Name:</label>
                        <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
                    <label>Calories:</label>
                        <input type='number' name='calories'  onChange={this.handleChange} value={this.state.calories}/>
                    <label>Image:</label>
                        <input type='text' name='image' onChange={this.handleChange} value={this.state.image} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddFood