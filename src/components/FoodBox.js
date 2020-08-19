import React from 'react';

class FoodBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 1
        }
    }
    handleQuantity = (event) =>{
        this.setState({
            count: event.currentTarget.value
        })
    }
    render(){
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.food.image} alt='img'/>
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
                        <input onChange = {this.handleQuantity} className="input" type="number" value={this.state.count} />
                        </div>
                        <div className="control">
                        <button onClick = {() => this.props.onAddToday(this.props.id, this.state.count)} className="button is-info">+
                        </button>
                        </div>
                        <button onClick= {()=>this.props.onDelete(this.props.id)} style = {{marginLeft: '5px'}} class="button is-danger">Delete</button>
                    </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default FoodBox