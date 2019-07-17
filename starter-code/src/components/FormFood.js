import React from "react";

export default class FormFood extends React.Component {
    constructor() {
        super()

        this.state = {
            foodFormDetails: {
                name: "",
                image: "",
                calories: undefined
            }
        }
    }

    handleFormChange(e, field) {
        let newState = { ...this.state }
        newState.foodFormDetails[field] = e.target.value
        this.setState(newState)
    }

    submitForm(e) {
         e.preventDefault()
        
        let currentFoodDetails = this.state.foodFormDetails
        debugger
        this.props.addNewFoodHandler(currentFoodDetails)
        console.log(currentFoodDetails)
        
       

        // then we can use axios to communicate with our API to record this data for example
        // axios.put("http://localhost:3000/foodDetails", this.state.foodFormDetails).then
    }

    render() {
        return (
            <form>
                
        <fieldset>
                    <input
                        type="text"
                        placeholder="name"
                        value={this.state.foodFormDetails.name}
                        onChange={(e) => this.handleFormChange(e, "name")}
                    ></input>
                    <input
                        type="text"
                        placeholder="image"
                        value={this.state.foodFormDetails.surname}
                        onChange={(e) => this.handleFormChange(e, "image")}
                    >
                    </input>
                    <input
                        type="text"
                        placeholder="calories"
                        value={this.state.foodFormDetails.age}
                        onChange={(e) => this.handleFormChange(e, "calories")}>
                    </input>
                </fieldset>
                <button onClick={(e) => this.submitForm(e)}>Submit this form!</button>
            </form>
        )
    }
  }