import React from 'react';

class FoodBox extends React.Component {

    state = {
        quantity: 1,
    };

    teste = ()=>{
        this.props.updateCart({quantity: this.state.quantity, name: this.props.food.name, calories: this.props.food.calories });
    }

    handleChange = event => {    
        this.setState({
            quantity: event.target.value,
        })
      }

   render() {
      const {food} = this.props;

      return (
    
        <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={food.image} alt='img' />
                </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{food.name}</strong> <br />
                        <small>{food.calories} cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
                    </div>
                    <div className="control">
                        <button className="button is-info" onClick={this.teste}>+</button>
                    </div>
                </div>
                </div>
            </article>
        </div>
    
      );
  }
  
};

export default FoodBox;