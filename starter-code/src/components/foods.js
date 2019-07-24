import React, {Component} from 'react';

class FoodBox extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: this.props.name,
            calories: this.props.calories,
            quantity: 1,
        };
    };

    quantityHandler = (event) => {
        const { value } = event.target;
        const { name, calories } = this.props;
        this.setState({
            quantity: value,
            name: name,
            calories: calories * value,
        });
    };

    addToday = (event) => {
        event.preventDefault();
        this.props.todaysFood(this.state)
        
        this.setState({
            name: this.props.name,
            calories: this.props.calories,
            quantity:1,
        });  
    };


    render(){
        return(
            <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={this.props.img} alt={this.props.name}/>
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{this.props.name}</strong> <br />
                    <small>{this.props.calories} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input
                        className="input"
                        type="number" 
                        value={this.state.quantity}
                        onChange={e => this.quantityHandler(e)}
                    />
                    </div>
                    <div className="control">
                    <button className="button is-info"
                    onClick={e => this.addToday(e)}
                    >
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
            </div>
        );
    }
}

export default FoodBox;