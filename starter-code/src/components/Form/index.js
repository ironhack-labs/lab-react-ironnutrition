import React, { Component } from 'react';
import "./style.css";
import Input from '../Input';

class Form extends Component {   

    state = {
        name: 'Name...',
        calorias: '0',
        img: 'Image...'
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render(){
        const { addFood } = this.props;
        const { name, calorias, img } = this.state;
        return (
            <div className="all-form">
               <h1> Add a Food</h1>
               <Input id="name" name="name" type="text" value={name} action={this.handleInput}/>
               <Input id="calorias" name="calorias" type="number" value={calorias} action={this.handleInput}/>
               <Input id="img" name="img" type="text" value={img} action={this.handleInput}/>
               <button onClick={() => addFood({name},{calorias}, {img})}> Send </button>
            </div>
        )
    }
}

export default Form;