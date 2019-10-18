import React, { Component } from "react";

class FoodBox extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            count: 1
        }
    }

    changeCountHandler = (e) => {
        let currentCount = e.target.value;

        this.setState({
            count: currentCount
        })
    }

    render(){
        return(
            <div id="root">
                <div className="container p-3">
                    <div className="columns">
                        <div className="column">
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
                                        <small>{this.props.calories}</small>
                                        </p>
                                    </div>
                                    </div>
                                    <div className="media-right">
                                    <div className="field has-addons">
                                        <div className="control">
                                        <input
                                            className="input"
                                            type="number" 
                                            value={this.state.count}
                                            onChange={this.changeCountHandler}
                                        />
                                        </div>
                                        <div className="control">
                                        <button className="button is-info" onClick={()=>this.props.addFoodHandler(this.props, this.state)}>
                                            +
                                        </button>
                                        </div>
                                    </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FoodBox