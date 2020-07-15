import React, {Component} from 'react'

class AddFood extends Component {
    constructor (){
        super ()
        this.state = {
            image: "",
            name: "",
            calories: ""
        }
    }
    
    handleFormSubmit = e => {
        e.preventDefault()
        this.props.insertFood(this.state)
        this.setState({
            image: '',
            name: '',
            calories:''
            
        })
    }

    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
    }


    render () {
        return (
            <>

          <form onSubmit={this.handleFormSubmit}>
           <label>
           Name:
               <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange}/>
           </label>
           Calories:
           <label>
               <input name="calories" type="text" value={this.state.calories} onChange={this.handleInputChange}/>
           </label>
           Image:
           <label>
               <input name="image" type="string" value={this.state.image} onChange={this.handleInputChange}/>
           </label>
           <button>Enviar</button>
           </form>
            </>
        )
    }
}

export default AddFood