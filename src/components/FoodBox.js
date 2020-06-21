import React, { Component } from 'react';


export default class FoodBox extends Component {

    constructor(props){
        super(props);
        this.setQuantity = this.setQuantity.bind(this);
        this.resetQuantity = this.resetQuantity.bind(this);

    }

    state = {
        quantity : 1
    }

    setQuantity(e){
        this.setState({
            quantity: e.target.value
        });
    }

    resetQuantity(){
        this.setState({
            quantity: 1
        })
    }

    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.image} alt=""/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.name}</strong> <br />
                                <small>{`${this.props.calories} cal`}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" min="1" value={this.state.quantity} onChange={this.setQuantity}/>
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={()=> { this.props.todaysFoodHandler(this.props.name, this.state.quantity, this.props.calories); this.resetQuantity()}}> + </button>
                            </div>
                        </div>
                    </div>
                </article>

            </div>
        )
    }
}
