import React  from 'react';

class FoodBox extends React.Component {
    // debugger
    constructor () {
        super();
        this.getValue = this.getValue.bind(this)
    }
    state = {
        quantity:1
    }

    getValue (e) {
        // e.preventDefault();
        // debugger
        if (e.target.value) {
           let newValue = e.target.value; 
           this.setState({quantity:newValue})
        }
         
    }
    render () {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                        <img src={this.props.foodItem.image} alt=""/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                        <p>
                            <strong>{this.props.foodItem.name}</strong> <br />
                            <small>{this.props.foodItem.calories} cal</small>
                        </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                        <div className="control">
                            <input
                            className="input"
                            type="number" 
                            placeholder= "0"
                            // value = "1"
                            onChange={this.getValue}
                            />
                        </div>
                        <div className="control">
                            <button className="button is-info" 
                            onClick={()=>{
                                this.props.addToday(this.props.index,this.state.quantity);

                            }}>
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

export default FoodBox;