import React, {Component} from "react";

export default class FoodBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      qty: 1,
      cals: props.calories,
      image: props.image
    }
  }

  handleSubmit(){
    console.log(this)
    let {name, qty, cals} = this.state;
    cals = cals * qty
    this.props.addToday({name, qty, cals})
  }

  render (){
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.state.image} alt={this.state.name}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.state.name}</strong> <br />
                <small>{this.state.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={this.state.qty} onChange={e => this.setState({qty: e.target.value})} />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.handleSubmit.bind(this)}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  };

}





// const Foodbox = ({image, name, calories}) => {
//   return (
//     <div className="box">
//       <article className="media">
//         <div className="media-left">
//           <figure className="image is-64x64">
//             <img src={image} alt={name}/>
//           </figure>
//         </div>
//         <div className="media-content">
//           <div className="content">
//             <p>
//               <strong>{name}</strong> <br />
//               <small>{calories}</small>
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
//   );
// };

// export default FoodBox;
