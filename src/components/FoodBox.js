import React from 'react';

class FoodBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            item: '',
            quantity: 1,
            calories: 0,
        }
    }

    handleQuantity = (e) =>{
        const foodItem = e.target.name
        const quantity = e.target.value
        this.setState({
            item: foodItem,
            quantity,
        })
    }

    foodTally = (e) =>{
        e.preventDefault()
        const foodItem = e.target.elements[0].name
        const quantity = e.target.elements[0].value
        const calories = e.target.elements[1].value
        this.setState({
            item: foodItem,
            quantity,
            calories
        }, function(){this.props.FoodTally(this.state)})
    }


    render(){
        return (
            // console.log(this.props)
            <div className="box">
                <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                    <img src={this.props.food.image} alt={this.props.food.name}/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                    <p>
                        <strong>{this.props.food.name}</strong> <br />
                        <small>{this.props.food.calories}</small>
                    </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <form onSubmit={this.foodTally}>
                            <div className="control">
                                <input className="input" type="number" id={this.props.food.name} name={this.props.food.name} value={this.props.food.name === this.state.item ?  this.state.quantity : '1'} onChange={this.handleQuantity}/>
                                <input className="input" type="hidden" id={this.props.food.name + 'calories'} name={this.props.food.name+'_calories'} defaultValue={this.props.food.calories} readOnly={true}/>
                            </div>
                            <div className="control">
                                <button type='submit' className="button is-info">+</button>
                            </div>
                        </form>
                    </div>
                </div>
                </article>
            </div>
        )
    }
}

export default FoodBox;
