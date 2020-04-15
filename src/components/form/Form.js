import React, { Component } from 'react';

class Form extends Component {
    state = {
        showForm : false,
        name: "",
        calories: "",
        image: "",
        quantity: ""
    }
    
    showForm = () => {
        this.setState({
            showForm : true
        });
    }
    
    hideForm = () => {
        this.setState({
            showForm : false
        });
    }

    handleInput = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
    };
    

    handleSubmit = () =>{
        const { name, calories, image, quantity } = this.state;
        const newBox = {name, calories, image, quantity}
        this.props.addFoodBox(newBox);
        this.hideForm();
    }
    
    render() {
        const { name, calories, image, quantity } = this.state;
        return (
            <div>
                <button onClick={this.showForm}>create new food box</button>
                {this.state.showForm &&
                    <div>
                        <div>
                            <label htmlFor="name">name</label>
                            <input type="text" value={name} name="name" onChange={this.handleInput}/>
                        </div>
                        <div>
                            <label htmlFor="name">calories</label>
                            <input type="number" value={calories} name="calories" onChange={this.handleInput}/>
                        </div>
                        <div>
                            <label htmlFor="image">image url</label>
                            <input type="text" value={image} name="image" onChange={this.handleInput}/>
                        </div>
                        <div>
                            <label htmlFor="quantity">quantity</label>
                            <input type="number" value={quantity} name="quantity" onChange={this.handleInput}/>
                        </div>
                        <div>
                            <button  onClick={this.handleSubmit}>create</button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}




export default Form;