import './FoodBox.css';
import 'bulma/css/bulma.css';

import React, { Component } from 'react'

// const {name, calories, image} = props;
export class FoodBox extends Component {
  state = {
    quantity: 1
  }
  
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64" >
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
                <input className="input" type="number" value="1" />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default FoodBox


// SAME SAME WITH A FUNCTION COMPONENT
//import React from 'react'

// const FoodBox = (props) => {
//   const {name, calories, image} = props;
//     return (
//         <div className="box">
//         <article className="media">
//           <div className="media-left">
//             <figure className="image is-64x64" >
//               <img src={image} alt="food"/>
//             </figure>
//           </div>
//           <div className="media-content">
//             <div className="content">
//               <p>
//                 <strong>{name}</strong> <br />
//                 <small>{calories} cal</small>
//               </p>
//             </div>
//           </div>
//           <div className="media-right">
//             <div className="field has-addons">
//               <div className="control">
//                 <input className="input" type="number" value="1" />
//               </div>
//               <div className="control">
//                 <button className="button is-info">+</button>
//               </div>
//             </div>
//           </div>
//         </article>
//       </div>
//     )
// }

// export default FoodBox


