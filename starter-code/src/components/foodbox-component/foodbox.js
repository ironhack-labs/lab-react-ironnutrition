import React from 'react';

class FoodBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            howMany: 0,
        }
    }

    changeNum = (e) => {
        let theNum = this.state.howMany;
        theNum = Number(e.target.value);
        if (theNum >= 0){
            this.setState({
                howMany: Number(theNum),
            })
        }
      }

      addFood = (e) => {
        e.preventDefault()
        this.props.eatFood(this.props.theFood.name, this.props.theFood.calories, this.state.howMany);
        this.setState({
            howMany: 0,
        })
      }

      deleteFood = () => {
          this.props.deleteFood(this.props.theFood.name)
      }

    render(){
        return (
            <div className="box">
            <article className="media">
            <button className="button" onClick={this.deleteFood}>X</button>
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={this.props.theFood.image} />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{this.props.theFood.name}</strong> <br />
                    <small>{this.props.theFood.calories} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                    <form className="field has-addons" onSubmit={this.addFood}>
                        <div className="control">
                            <input
                                className="input control"
                                type="number" 
                                value={this.state.howMany}
                                onChange = {this.changeNum}
                            />
                        </div>
                        <div className="control">
                            <button className="button is-info control">
                                +
                            </button>
                        </div>
                    </form>  
                </div>
            </article>
            </div>
        )
        
    }
}

export default FoodBox;