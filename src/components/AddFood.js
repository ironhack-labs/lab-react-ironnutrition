// import React, { Component } from 'react';
// import foodList from '../foods.json';
// import 'bulma/css/bulma.css';


// class AddFood extends Component {
//   state = {
//     foodList,
//     foodName: '',
//     foodImage: '',
//     foodCalories: '',
//     searchParams: '',
//     isFormDisplayed: false,
//     todayFood: []
//   };

//   toggleForm = () => {
//     this.setState({
//       isFormDisplayed: !this.state.isFormDisplayed
//     })
//   }

//   handleInputChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }

//   handleOnSubmit = (e) => {
//     e.preventDefault();

//     const { foodName, foodCalories, foodImage } = this.state;
//     const newFoodList = [{ name: foodName, calories: foodCalories, image: foodImage}, ...this.state.foodList];

//     this.setState({
//       foodList: newFoodList,
//       foodName: '',
//       foodCalories: '',
//       foodImage: '',
//       isFormDisplayed: false
//     })
//   }

//   render() {
//     return (
//       <div>
//         <button className='button mb-4' onClick={this.toggleForm}>Add Food</button>
//           { this.state.isFormDisplayed && 
//           <form onSubmit={this.handleOnSubmit}>
//             {/* Name Field */}
//             <div className="field">
//               <label className="label">Name</label>
//               <div className="control">
//                 <input
//                   className='input'
//                   onChange={this.handleInputChange}
//                   name='foodName'
//                   type='text'
//                   value={this.state.foodName}
//                   placeholder='Add food name'
//                   required='true'
//                 />
//               </div>
//             </div>
//             {/* Calories Field */}
//             <div className="field">
//               <label className="label">Calories</label>
//               <div className="control">
//                 <input
//                   className='input'
//                   onChange={this.handleInputChange}
//                   type='number'
//                   name='foodCalories'
//                   value={this.state.foodCalories}
//                   placeholder='Add amount of calories'
//                   required='true'
//                 />
//               </div>
//             </div>
//             {/* Image Field */}
//             <div className="field">
//               <label className="label">Image</label>
//               <div className="control">
//                 <input
//                   className='input'
//                   onChange={this.handleInputChange}
//                   name='foodImage'
//                   type='text'
//                   value={this.state.foodImage}
//                   placeholder='Add image url'
//                 />
//               </div>
//             </div>
//             <button className='button' type='submit'>Add New Food</button>
//           </form>
//         }
//       </div>
//     )
//   }
// }

// export default AddFood;