import React, { Component } from 'react'

export default class AddFood extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = { 
    //         name: '',
    //         calories: '',
    //         image: '',
    //     }
    // }
    state = { 
        name: '',
        calories: '',
        image: '',
        showForm: false
    }

    handleForm = () => {
        this.setState({showForm: this.state.showForm})
    }

    handleNameInput = (event) => {
        this.setState({
          name: event.target.value
        })
      }

      handleCaloriesInput = (event) => {
        this.setState({
          calories: event.target.value
        })
      }

      handleImageInput = (event) => {
        this.setState({
          image: event.target.value
        })
      }

      handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTheFood(this.state);   
        this.setState({
          name: '',
          calories: '',
          image: '' 
        })  
      }


    render() {
        return (
            <>
             <form onSubmit={this.handleFormSubmit}>
            <div className="field">
                <div className="control">
                    <input className="input" type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.handleNameInput(e)}/>  
                    <input className="input" type="text" placeholder="Calories" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)}/>
                    <input className="input" type="text" placeholder="Image" value={this.state.image} onChange={(e) => this.handleImageInput(e)}/>
                </div>
            </div>
           <div className="field is-grouped is-grouped-right">
                <div className="control">
                <button class="button is-info">Submit</button>
                </div>
           </div>
           </form>
        </>
        )
    }
}
