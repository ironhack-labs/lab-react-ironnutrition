import React, { Component } from 'react';


//with class

class Food extends Component {
  state = {
    quantity: 1
  }
  handleQuantity = (e) => {
    this.setState({quantity: e.target.value})
  }

  render(){
    var addAmount = () => {
      var theFoodObject = {
        name: this.props.name,
        calories: this.props.calories,
        image: this.props.image,
        quantity: this.state.quantity,
        totalCal: this.state.quantity * this.props.calories
      }
      this.props.addFoodsToday(theFoodObject)
    }
    
    return(
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
            <p> <strong>{this.props.name}</strong> <br/>
            <small>{this.props.calories} cal</small> </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input id="quantity" name="quantity"
                  onChange={this.handleQuantity}
                  className="input" 
                  type="number" 
                  value={this.state.quantity}
                  min="1"
                />
              </div>
              <div className="control">
                <button 
                  onClick={addAmount} 
                  className="button is-info">
                  +
                </button>
                <button 
                  onClick={this.props.onDelete} 
                  id={this.props.name}
                  className="button is-danger">
                  x
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default Food;


//with stateless function
// const foods = (props) => {
//   const foodList = props.foodList.map((menuItem, i) =>
//     <article key={i} className="media">
//       <div className="media-left">
//         <figure className="image is-64x64">
//           <img src={menuItem.image} alt={menuItem.name}/>
//         </figure>
//       </div>
//       <div className="media-content">
//         <div className="content">
//         <p> <strong>{menuItem.name}</strong> <br/>
//          <small>{menuItem.calories} cal</small> </p>
//         </div>
//       </div>
//       <div className="media-right">
//         <div className="field has-addons">
//           <div className="control">
//             <input
//               className="input"
//               type="number" 
//               value="1"
//             />
//           </div>
//           <div className="control">
//             <button className="button is-info">
//               +
//             </button>
//           </div>
//         </div>
//       </div>
//     </article>
//   )
//   return (
//     <div className="box">
//       {foodList}
//     </div>
//     )
//   }
// export default foods;

