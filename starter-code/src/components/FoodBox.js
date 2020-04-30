import React, {Component} from 'react';

class FoodBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 1,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        console.log(this.state.count)
        this.setState({
            count: e.target.value
        })
    }

    render() { 
        let {name, calories, image, quantity} = this.props.foods;
        console.log(image);
        return (
            <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={image} alt={name} />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{name}</strong> <br />
                    <small>{calories} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input onChange={this.handleChange}
                        className="input"
                        type="number" 
                        value={this.state.count}
                    />
                    </div>
                    <div className="control">
                    <button onClick={() => this.props.AddToToday(name, this.state.count, calories)} className="button is-info">
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