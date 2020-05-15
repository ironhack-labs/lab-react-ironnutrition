import React, {Component} from 'react';
import './FoodBox.css';
import 'bulma/css/bulma.css';
import Button from '../Button/Button'
import Input from '../Input/Input'

class FoodBox extends Component{
    state = {
        quantity:1
    }

    changeQuantity = evt=>{
        console.log(evt.target.value)
        this.setState({
            quantity:evt.target.value
        })
    }
    addItemFoodBox =()=>{
        const {addItems,food} = this.props
        addItems({
            name:food.name,
            calories:parseInt(food.calories),
            quantity:parseInt(this.state.quantity)
        })
    }

    render(){
        const {food} = this.props
        return(
            <div className="box foodbox">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                        <img src={food.image} alt='' />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                        <p> 
                            <strong>{food.name}</strong> <br />
                            <small>{food.calories} cal</small>
                        </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                        <div className="control">
                            <Input name={food.name+'Input'} type='number' value={this.state.quantity} onChange={this.changeQuantity}/>
                        </div>
                        <div className="control">
                            <Button className='button is-info' method={this.addItemFoodBox}>+</Button>
                        </div>
                        </div>
                    </div>
                </article>
            </div> )
    }

}

export default FoodBox