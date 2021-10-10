import React from 'react';
import './FoodBox.css';
import AddFoodButton from '../addfoodbutton/AddFoodButton';

class FoodBox extends React.Component {
  state = {
    quantity: 0,
    name: '',
    calories: '',
  };

  handleSelectedFood = (inputValue) => {
    this.setState(
      {
        quantity: inputValue,
        name: this.props.name,
        calories: this.props.calories,
      },
      () => {
        console.log('in the food box', this.state);
        this.props.addFooodToList(this.state);
      }
    );
  };

  render() {
    const { name, calories } = this.props;
    return (
      <div className='box' key={this.props.index}>
        <article className='media'>
          <div className='media-left'>
            <figure>
              <img src={this.props.image} alt='food-item' className='mainImg' />
            </figure>
          </div>
          <div className='media-content'>
            <div className='content'>
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className='media-right'>
            <AddFoodButton addFoodToList={this.handleSelectedFood} />
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
