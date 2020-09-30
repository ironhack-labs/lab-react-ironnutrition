import React, { Component } from 'react'

 
class FoodBox extends Component {
    constructor({name, calories, image, quantity}) {
        super()
        this.state = { }
    }
 
    addFood = e => {
        
        this.props.menuAdd(this.props.name) 
        
    }

    render() {
 
        return (
            <>

                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={this.props.image} alt={this.props.name}/>
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
                                    <input className="input" type="number" value="1" />
                                </div>
                                <div className="control">
                                    <button className="button is-info" onClick={this.addFood}> + </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>   

            </>
        )
    }
    }
export default FoodBox