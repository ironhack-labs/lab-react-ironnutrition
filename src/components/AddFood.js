import React, { Component } from 'react';

class AddFood extends Component {
    state = {
        name: this.props.name,
        calories: this.props.calories,
        image: this.props.image
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
            let newfoods = [{title:foodName, completed: false}, ...this.state.foods]
            this.setState({
              foods: newfoods,
              isClicked: false
            })   
          }

          
         showForm = () => {
            this.setState({isClicked: !this.state.isClicked})
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
                                name="name"
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
                             <button onClick={this.showForm}  type="submit">Submit</button>
                        </form>
                    </div>
                );
            }
        }

    
        
    
export default AddFood;