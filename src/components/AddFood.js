import React, { Component } from 'react';

class AddFood extends Component {
    state = {
        name: this.props.name,
        calories: this.props.calories,
        image: this.props.image,
        foods: []

    }

        handleQuantityChange = (event) => {
            console.log(event.currentTarget.value)
        let newValue = event.currentTarget.value
        this.setState ({
            quantity: newValue 
        })
        }

        handleFormSubmit = (event) => {
            event.preventDefault() // always do this with submit events
            let foodName = event.currentTarget.food.value
            let image = event.currentTarget.image.value
            let calories = event.currentTarget.calories.value
            let newfoods = [{name:foodName, calories: calories, image:image, completed: false}, ...this.state.foods]
            this.setState({
              foods: newfoods,
              isClicked: false
            })   
          }

          
         showForm = () => {
            this.setState({isClicked: !this.state.isClicked})
          }

            getVisibleClass = ()=>{
                return this.props.showForm ? "form-visible": "form-unvisible";
            }

            render() {
                const { name, calories, image } = this.state;
                return (
                    
                    <div>
                        <form onSubmit={this.handleFormSubmit}>
                            <label>Name</label>
                            <input
                                className="input"
                                type="text"
                                name="food"
                                value={name}
                                onChange={this.handleQuantityChange}
                            />
                            <label>Calories</label>
                            <input
                                className="input"
                                type="text"
                                name="calories"
                                value={calories}
                                onChange={this.handleQuantityChange}
                            />
                            <label>Image</label>
                            <input
                                className="input"
                                type="text"
                                name="image"
                                value={image}
                                onChange={this.handleQuantityChange}
                            />
                             <button type="submit">Submit</button>
                        </form>
                    </div>
                );
            }
        }

    
        
    
export default AddFood;