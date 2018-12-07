import React, { Component } from 'react';
import 'bulma/css/bulma.css';

// class addForm extends Component {
//   render (){   
//     return(
//       <div> 
//         <form className="form" id="addItemForm" >
//           <input type="text" onChange={this.props.updateNewFood} className="input" id="addName" name="name" />
//           <input type="text" onChange={this.props.updateNewFood} className="input" id="addCal" name="calories" />
//           <input type="text" onChange={this.props.updateNewFood} className="input" id="addImg" name="image" />
//           <button className="button is-info" value="submit" type="button" onClick={this.props.addFood}>
//             Add item
//           </button>
//         </form>
//       </div>
//     )
//   }
// }

class addForm extends Component {

  state = {
    modalActive: false
  }
  toggleModal = () => {
    this.setState({modalActive: !this.state.modalActive}, function(){
    })
  }
  render (){   
    if(this.state.modalActive) {
      var classNames = "modal is-active"
    } else {
     classNames = "modal"
    }
    return(
      <div>
      <button onClick={this.toggleModal} className="button is-primary modal-button" data-target="modal" aria-haspopup="true">Add Food</button>
        <div className={classNames}>
          <div className="modal-background"></div>
          <div className="modal-content">
          <input type="text" onChange={this.props.updateNewFood} className="input" id="addName" name="name" placeholder="name"/>
           <input type="number" onChange={this.props.updateNewFood} className="input" id="addCal" name="calories" placeholder="calories" />
           <input type="text" onChange={this.props.updateNewFood} className="input" id="addImg" name="image" placeholder="image"/>
           {/* <button className="button is-info modal-button" value="submit" type="button" onClick={this.props.addFood}></button> */}
           <button onClick={this.props.addFood} className="button is-primary modal-button" data-target="modal" aria-haspopup="true">Submit Food</button>
        
          </div>
          <button onClick={this.toggleModal} className="modal-close is-large" aria-label="close"></button>
        </div>
      </div>
    )
  }
}





export default addForm;

