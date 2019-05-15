import React, { Component } from 'react';

class AddFood extends Component {
   
    render(){
        return(
            <div >
            <form onSubmit={this.props.setFood}>
                <input name="name" type="text" placeholder="name"  />
                <input name="calories" type="number"  placeholder="calories" /> 
                <input name="image" type="text" placeholder="img URL" />
                <button class="is-success" >Add Food</button>
            </form>
          </div>
        )
    }
}


export default AddFood
