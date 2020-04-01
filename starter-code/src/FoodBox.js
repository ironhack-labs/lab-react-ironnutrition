import React,{Component} from 'react'

export default class FoodBox extends Component {
    state = {
        amount:1
    }
    getAmount = (e) => {
        this.setState({
            amount:e.target.value
        })
    }
    render(){
        return (
            <div className='food-box'>
                <img src={this.props.image} alt=""/>
                <div>
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.calories} cal</h4>
                </div>
                <input className='number-input' type="number" min='1' value={this.state.amount} onChange={this.getAmount}/>
                <button onClick={()=>{
                    this.props.addFood(this.props.index, this.state.amount)
                    this.setState({
                        amount: 1
                    })
                }}>+</button>
            </div>
        )
    }
}