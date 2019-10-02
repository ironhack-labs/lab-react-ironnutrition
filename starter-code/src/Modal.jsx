import React, { Component } from 'react';
// import './Modal.css';
class Modal extends Component {
   inputUpdate = (e) => {
       this.setState({
           [e.target.name] : e.target.value
       })
   }
   addFoodItem = () => {

     this.props.foodList.push({
       name: this.state.name,
       calories: this.state.calories,
       image: this.state.image,
       quantity: 0
     })
     this.props.closeModal();
   }
   render() {
       if(!this.props.modalState) {
           return null;
         }
       return (
           <div className="modal is-active">
               <div className="modal-background" onClick={this.props.closeModal} />
               <div className="modal-card">
               <header className="modal-card-head">
                   <p className="modal-card-title">{this.props.title}</p>
                   <button className="delete" onClick={this.props.closeModal} />
               </header>
               <section className="modal-card-body">
                   <div className="content">
                       <div className="field">
                           <label className="label">Name</label>
                           <div className="control">
                               <input className="input" type="text" placeholder="Food Name" name="name" onChange={this.inputUpdate} />
                           </div>
                           <label className="label">Calories</label>
                           <div className="control">
                               <input className="input" type="text" placeholder="Food Calories" name="calories" onChange={this.inputUpdate} />
                           </div>
                           <label className="label">Image</label>
                           <div className="control">
                               <input className="input" type="text" placeholder="Image URL" name="image" onChange={this.inputUpdate} />
                           </div>
                       </div>
                   </div>
               </section>
               <footer className="modal-card-foot">
                   <button onClick={this.addFoodItem}>Submit</button>
               </footer>
               </div>
           </div>
           );
   }
 }
 export default Modal;