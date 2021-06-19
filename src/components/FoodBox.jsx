import React from 'react';
import { Component } from 'react';
// import foods from '../foods.json';
import 'bulma/css/bulma.css';
// import AddFood from './AddFood';

// const allFoodList = [...foods];

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  handleChangeQuantity = (event) => {
    console.log('Event', event);
    this.setState({
      quantity: event.target.value,
    });
  };
  render() {
    const { name, calories, image } = this.props.food; //food it s the vaue i have assigned in app.js to item(of the map)

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt="foodimage" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} </small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.quantity}
                  onChange={this.handleChangeQuantity}
                />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
export default FoodBox;

// const FoodBox = (props) => {
//   return allFoodList.map((item, index) => (
//     <div className="box">
//       <article className="media">
//         <div className="media-left">
//           <figure className="image is-64x64">
//             <img src={item.image} alt="foodimage" />
//           </figure>
//         </div>
//         <div className="media-content">
//           <div className="content">
//             <p>
//               <strong>{item.name}</strong> <br />
//               <small>{item.calories} cal</small>
//             </p>
//           </div>
//         </div>
//         <div className="media-right">
//           <div className="field has-addons">
//             <div className="control">
//               <input className="input" type="number" value="1" />
//             </div>
//             <div className="control">
//               <button className="button is-info">+</button>
//             </div>
//           </div>
//         </div>
//       </article>
//     </div>
//   ));
// };
