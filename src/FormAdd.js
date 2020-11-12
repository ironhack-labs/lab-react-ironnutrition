import React, { Component } from 'react';

class FormAdd extends Component {
    state = {showForm: false}
    showForm = ()  => {
        this.setState({showForm: true})
        console.log('hola')
         this.render(<h1>HOLA</h1>)
        
    };


    render() {
        return (
           <div>
                <button  onClick={() => this.showForm()}>Button</button>
                {this.state.showForm ? "Hide Oscar Awarded" : "Show Oscar Awarded"}
                
                </div>
        )
    }
    
}
export default FormAdd;