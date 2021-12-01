import React from "react";

const AddFoodBtn = (props) => {

        return (

            <form onSubmit={this.handleSubmit} className="">

                <label>
                    Name: <input onChange={this.handleChange} value={this.state.name} type="text" name="name" />
                </label>

                <label>
                    Calories: <input onChange={this.handleChange} value={this.state.calories} type="text" name="calories" />
                </label>

                <label>
                    Image: <input onChange={this.handleChange} value={this.state.image} type="text" name="image" />
                </label>

                <input type="submit" value="Add Food" />
            </form>
        )
}



export default AddFoodBtn