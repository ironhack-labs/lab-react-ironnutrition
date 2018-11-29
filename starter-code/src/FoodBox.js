import React, {Component} from "react"

class Foodbox extends Component{

    constructor(props){
        super(props)
        this.state = {
            foodquantity : "1",
        }
    }

    genericSynchronize(event){
        const {value} = event.target
        this.setState({foodquantity : value})
    }

    handleSubmit(event){
        const {name, calories, image} = this.props
        
        this.props.addTodayFood({
            foodname: name,
            foodcalories: calories,
            foodimage: image,
            foodquantity: this.state.foodquantity
        });

        this.setState ({
            foodquantity : "1",
        })
    }


render(){
    const {name, calories, image} = this.props
    return(
        <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={image} />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{name}</strong> <br />
                    <small>{calories}</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input
                        onChange={event => this.genericSynchronize(event)}
                        className="input"
                        type="number" 
                        value={this.state.foodquantity}
                        placeholder = "1"
                    />
                    </div>
                    <div className="control">
                    <button className="button is-info" onClick={event => this.handleSubmit(event)}>
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

export default Foodbox;