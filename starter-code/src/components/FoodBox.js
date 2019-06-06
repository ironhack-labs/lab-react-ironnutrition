import React, { Component } from 'react'



class foodBox extends Component {
  constructor(props){
    super(props) 
    this.state = {
      quantity:0
    }
  }

  handleChange = (e) =>{

    console.log(e.target)
    let {name, value} = e.target
    this.setState({[name]:value})
  }

  render(){
    return(
      <div className="box">
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
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                key= {this.props.key}
                onChange={(e)=>this.handleChange(e)}
                className="input"
                type="number" 
                value={this.state.quantity}
                name="quantity"
              />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
    )
  }

}

// const foodBox = (props) => {

//   return (
//     <div className="box">
//     <article className="media">
//       <div className="media-left">
//         <figure className="image is-64x64">
//           <img src={props.image} />
//         </figure>
//       </div>
//       <div className="media-content">
//         <div className="content">
//           <p>
//             <strong>{props.name}</strong> <br />
//             <small>{props.calories}</small>
//           </p>
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
//   </div>
//   )
// };

export default foodBox;