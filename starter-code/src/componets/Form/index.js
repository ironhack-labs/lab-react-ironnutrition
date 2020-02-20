import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Form extends Component {

    render() {
        const { name, calories, image, quantity, addFood, handleInput } = this.props;
        return (
            <div className="box">


                    <div class="Name control">
                        <input class="input" type="text" placeholder="food name" name="name" value={name} onChange={this.props.handleInput} />
                    </div>

                    <div class="Image control">
                        <input class="input" type="text" placeholder="food image" name="image" value={image} onChange={this.props.handleInput} />
                    </div>

                    <div class="Calories control">
                        <input class="input" type="text" placeholder="calories" name="calories" value={calories} onChange={this.props.handleInput} />
                    </div>

                    <div class="Quantity control">
 
                                <input
                                    className="input"
                                    type="number"
            
                                    placeholder="quantity" name="quantity" value={quantity} onChange={handleInput}
                                />
                    </div>
                    <div class="Submit control">
                        <button class="button is-primary" onClick={addFood} >Submit</button>
                    </div>

            </div>
        )
    }
}

export default Form;    