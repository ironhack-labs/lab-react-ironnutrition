import React from 'react';


class FoodBox extends React.Component {
  state = {
    name: this.props.name,
    quantity: 0,
    calories: 0,
}


updateItems = (e) => {
    this.setState({
        quantity:e.target.value,
        calories:e.target.value*this.props.calories,   
    })
}

addToList = () => {
    this.props.updateFoodList(this.state)
}

  render() {
    return (
      <div className="App">
    
       <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.image} alt="food"/>
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
                                    onChange={this.updateItems}
                                />
                            </div>
                            <div className="control">
                                <button onClick={this.addToList} className="button is-info">+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
    
      </div>
      
    );
  }
}

export default FoodBox;
