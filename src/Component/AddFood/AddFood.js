// import React from 'react';
// import './AddFood.css';
// import foods from '../../foods.json';
// import FoodBox from '../Foodbox/FoodBox';

// class AddFood extends React.Component {
//   state = {
//     active: false,
//     name: '',
//     calories: '',
//     image: '',
//     quantity: 0,
//     foods: foods,
//     search: '',
//   };

//   sendItem = (event) => {
//     event.preventDefault();
//     const { name, calories, image, quantity } = this.state;
//     const data = { name, calories, image, quantity };
//     console.log(`DATA: `, data);
//     this.state.foods.push(data);
//     const updatedFoodList = this.state.foods;
//     console.log(`UPDATED FOOD LIST: `, updatedFoodList);
//     this.setState({
//       foods: updatedFoodList,
//     });
//     //     alert(`Message with data: ${JSON.stringify(data, null, 2)} was sent.`);
//   };

//   showForm = () => {
//     //using state passing a function instead of an object
//     console.log('showForm being clicked');
//     this.setState(() => ({
//       active: true,
//     }));
//   };

//   hideForm = () => {
//     //using state passing a function instead of an object
//     console.log('hideForm is being clicked');
//     console.log(`STATE FOODS`, this.state.foods);
//     this.setState(() => ({
//       active: false,
//     }));
//   };

//   handleInputChange = (event) => {
//     const { value } = event.target;
//     const name = event.target.name;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSearch = (event) => {
//     const { value } = event.target;
//     const name = event.target.name;
//     this.setState({
//       [name]: value,
//     });
//   };

//   checkSearch = () => {
//     return console.log(this.state.search);
//   };

//   render() {
//     this.checkSearch();

//     const { active } = this.state;

//     return (
//       <div>
//         <button
//>Add Food</button>
//         <h1> Hi all the active attribute is {`${active}`}</h1>
//         <label>Search: </label>
//         <input
//           type="text"
//           placeholder="Search"
//           name="search"
//           onChange={this.handleSearch}
//         />
//         <form
//           className={active ? 'paragraph-hidden' : ''}
//           style={{ display: active ? 'block' : 'none' }}
//           onSubmit={this.sendItem}
//         >
//           <label>Name: </label>
//           <input
//             type="text"
//             placeholder="Name"
//             value={this.state.name}
//             name="name"
//             onChange={this.handleInputChange}
//             required={true}
//           />
//           <label>Calories:</label>
//           <input
//             type="number"
//             placeholder="Calories"
//             name="calories"
//             value={this.state.calories}
//             onChange={this.handleInputChange}
//             required={true}
//           />
//           <label>Image Url:</label>

//           <input
//             type="text"
//             placeholder="image url"
//             name="image"
//             value={this.state.image}
//             onChange={this.handleInputChange}
//             required={true}
//           />
//           <button onClick={this.hideForm}>Submit</button>
//         </form>

//         {this.state.foods.map((food, index) => {
//           return (
//             <div key={index} className="box">
//               <article className="media">
//                 <div className="media-left">
//                   <figure className="image is-64x64">
//                     <img src={food.image} alt="food" />
//                   </figure>
//                 </div>
//                 <div className="media-content">
//                   <div className="content">
//                     <p>
//                       <strong>{food.name}</strong> <br />
//                       <small>{food.calories}</small>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="media-right">
//                   <div className="field has-addons">
//                     <div className="control">
//                       <input className="input" type="number" />
//                     </div>
//                     <div className="control">
//                       <button className="button is-info">+</button>
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
// export default AddFood;
