import React, { Component } from "react";

class AddFood extends Component{

     state = {
        newFood : {
            name: "", 
            calories: 0,
            image: "",
        }

    }
    handleClickAddFood = (e) => {
        e.preventDefault()
        //console.log(this.state)

        const { click } = this.props;
        click(this.state.newFood);
        this.setState(
          {
            newFood: "",
          },
          () => {
            console.log("input", this.state.newFood);
          }
        );
      };




    }

    handleInput = (e) => {
        console.log("event", e.target.value)
        console.log("name", e.target.name)
        this.setState( {
            newFood: {
                ...this.state.newFood, 
                [e.target.name] : e.target.value
            }
        })
    }

    render() {
        const { name, calories, image } = this.state.newFood
        return(
            
            <div>
                <form onSubmit={this.handleClickAddFood}>
                    <label>Image</label>
                    <input type="text" name="image" value={image} onChange={this.handleInput}/>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={this.handleInput}/>
                    <label>Calories</label>
                    <input type="number" name="calories" value={calories} onChange={this.handleInput}/>
                    <button type="sumbit" value="Submit" onClick={this.handleClickAddFood}>Submit</button>

                </form>
            

            </div>


        )

    }
        
}

export default AddFood;