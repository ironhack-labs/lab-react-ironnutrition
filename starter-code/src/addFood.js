import React, { Component } from 'react';

class AddFood extends Component {   
    render(){
        return(
            <div>
            <div>Add Food</div>
            <form onSubmit={this.props.addAFood}>
                <input name="image" type="text"/>
                <input name="name" type="text" onChange={this.props.setNameAndCalories} />
                <input name="calories" type="text" onChange={this.props.setNameAndCalories }/> 
                <button>Submit</button>
            </form>
          </div>
        )
    }
}


export default AddFood;