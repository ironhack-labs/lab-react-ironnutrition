import React from 'react';

class FoodBox extends React.Component {
  render() {
    const { name, calories } = this.props;
    return (
      <div>
        <div className='box' key={this.props.index}>
          <article className='media'>
            <div className='media-left'>
              <figure className='image is-64x64'>
                <img src={this.props.image} alt='food-item' />
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
              <div className='field has-addons'>
                <div className='control'>
                  <input className='input' type='number' value='1' />
                </div>
                <div className='control'>
                  <button className='button is-info'>+</button>
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
