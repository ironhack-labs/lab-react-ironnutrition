import React, { Component } from 'react'

class FoodItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             quantity: 0
        }
    }

    handleChange = (e) =>{
        let { name, value } = e.currentTarget
        this.setState({
            [name] : value
        })
    }
    

    render() {
        return (
            <div className="box" key={this.props.food.name}>
            <article className="media" >
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
                    <div className="control">
                        <input className="input" onChange={this.handleChange} type="number" name="quantity"/>
                    </div>
                    <div className="control">
                        <button className="button is-info" onClick={() => this.AddList(this.props.food)}>
                        +
                        </button>
                    </div>
                    </div>
                </div>
            </article>
        </div>
         )
        
    }
}

export default FoodItem