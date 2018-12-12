import React, {Component} from 'react';


class AddFoodForm extends Component {
  state = {
    modalActive: false
  }

  toggleModal= () => {
    this.setState({modalActive: !this.state.modalActive})
  }

  render() {

    // if(this.state.modalActive) {
    //   var classNames = "modal is-active"
    // } else {
    //   var classNames = "modal"
    // }

    return(
      // <div>
      // <button onClick={this.toggleModal} className="button is-primary is-large modal-button" data-target="modal" aria-haspopup="true">Launch example modal</button>
      //   <div className= {classNames}>
      //     <div className="modal-background"></div>
      //       <div className="modal-content">

      //       </div>
      //     <button onClick={this.toggleModal} class="modal-close is-large" aria-label="close"></button>
      //   </div>
      // </div>
    )
  }
}