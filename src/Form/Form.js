import React, { Component } from 'react';

  class Form extends Component {
     constructor(props){
         super(props)
         this.state ={
             name: '',
             number: '',
             calories: '',
             image: ''
         }
     }
     handlerInpunt(e){
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
     }
 	render() {
 		return (
 			<div>
                 <input type="text" name="name" class="input" placeholder="name" value={this.state.name} onChange={(e) => this.handlerInpunt(e)}/>
                 <input type="text" name="number" class="input"  placeholder="number" value={this.state.number} onChange={(e) => this.handlerInpunt(e)}/>
                 <input type="text" name="calories" class="input"  placeholder="calories" value={this.state.calories} onChange={(e) => this.handlerInpunt(e)}/>
                 <input type="text" name="image" class="input"  placeholder="image" value={this.state.image} onChange={(e) => this.handlerInpunt(e)}/>
                 <button onClick={() => this.props.handleAddFood(this.state)}>Add food now!</button>
             </div>

  		);
 	}
 }

  export default Form;