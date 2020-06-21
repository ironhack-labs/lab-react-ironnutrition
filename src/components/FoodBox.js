import React, { Component } from 'react';

class FoodBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            number : 1,
            name : this.props.name,
            calories : this.props.calories
        }
    }
   
    setNumber=(e)=>{
        let number = e.target.value;
        this.setState({number: parseInt(number)});
      }

    render() {
        console.log("FoooD",this.state.name, this.state.calories, this.state.number);
        
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.img} alt ="food" />
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
                                <input className="input" type="number" onChange={(e) => this.setNumber(e)} value={this.state.number}/>
                            </div>
                            <div className="control">
                                <button onClick = {()=>this.props.addToList(this.state.name, this.state.calories, this.state.number)} className="button is-info">
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


