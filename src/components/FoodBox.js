import React from 'react'


class FoodBox extends React.Component {

    constructor(props){
        super(props)
        this.state ={
           amount:1,
        }
        
    }


    handleAmount=(event)=>{
        let newCounter = event.currentTarget.value
        this.setState({
            amount:newCounter
        })
    }



    render() {
        return (
        

                <div className="box">
                <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                <img src={this.props.food.image} alt='foodImg'/>
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories}</small>
                </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                <div className="control">
                <input className="input" type="number"  value={this.state.amount} onChange={this.handleAmount}/>
                </div>
                <div className="control">
                <button onClick={() => this.props.trigger(this.props.food.name, this.state.amount, this.props.food.calories)}  className="button is-info">
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

export default FoodBox



// import React from 'react';

// function FoodBox(props) {
//     return (
//         <div>
//             <div className="box">
//   <article className="media">
//     <div className="media-left">
//       <figure className="image is-64x64">
//         <img src={props.food.image} alt='foodImg'/>
//       </figure>
//     </div>
//     <div className="media-content">
//       <div className="content">
//         <p>
//           <strong>{props.food.name}</strong> <br />
//           <small>{props.food.calories}</small>
//         </p>
//       </div>
//     </div>
//     <div className="media-right">
//       <div className="field has-addons">
//         <div className="control">
//           <input className="input" type="number" value="1" />
//         </div>
//         <div className="control">
//           <button onClick={} className="button is-info">
//             +
//           </button>
//         </div>
//       </div>
//     </div>
//   </article>
// </div>
//         </div>
//     )
// }

// export default FoodBox
