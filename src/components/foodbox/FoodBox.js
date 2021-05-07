import React, {Component} from 'react'
import 'bulma/css/bulma.css';
// import foods from "../foods.json";


export default class FoodBox extends React.Component {
    
    
    state = {
        calories2: 0,
      
    }



     addOne(){
          this.setState({calories2: this.state.calories2 + 1})
          this.props.addFoodtoList()
          this.setState({totalCalories: this.state.totalCalories + this.props.calories})
      }

    render(){
    return (
        <div>
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.props.image} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.props.name}</strong> <br />
                    <small>{this.props.calories}</small>
                    <p></p>
                    
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value={this.state.calories2} />
                  </div>
                  <div className="control">
                    <button className={this.props.id} onClick={() => this.addOne() }  className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
        </div>
    )
    }
}



// export default class FoodBox extends Component {

//    constructor(props){
//        super(props);

//    }



//     render() {
//         return (
//           <div className="box">
//             <article className="media">
//               <div className="media-left">
//                 <figure className="image is-64x64">
//                   <img src="https://i.imgur.com/eTmWoAN.png" />
//                 </figure>
//               </div>
//               <div className="media-content">
//                 <div className="content">
//                   <p>
//                     <strong>{props.name}</strong> <br />
//                     <small>400 cal</small>
//                   </p>
//                 </div>
//               </div>
//               <div className="media-right">
//                 <div className="field has-addons">
//                   <div className="control">
//                     <input className="input" type="number" value="1" />
//                   </div>
//                   <div className="control">
//                     <button className="button is-info">+</button>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           </div>
//         );
//     }
// }
