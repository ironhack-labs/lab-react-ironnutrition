// import React from 'react';
// import { Component } from 'react';
// import foods from '../foods.json';
// import 'bulma/css/bulma.css';

// const allFoodList = [...foods];

// class AddFood extends Component {
//   state = {
//     data: allFoodList,
//     formVisibility: false,
//   };
//   //     constructor(props) {
//   //     super(props);
//   //     this.state = { data: allFoodList };
//   //   }
//   //   clickFormHandler = () => {
//   //     console.log('CLICKED');
//   //     return;
//   //   };
//   displayForm = () => {
//     console.log('Clicked displayForm!');
//     this.setState({ formVisibility: !this.state.formVisibility });
//   };

//   //   handleTitleChange = (event) => {
//   //     event.persist(); //
//   //     console.log(event.target.value);
//   //     const newFood = [event.target.value];
//   //     // newFood.push(allFoodList);
//   //     console.log('NEW ITEM ADDED', newFood);
//   //     this.setState({
//   //       [event.target.name]: event.target.value,
//   //     });
//   //     console.log('this new value', event.target.value);
//   //   };
//   //   handleCaloriesChange = (e) => {
//   //     console.log('hola', e);
//   //   };

//   //   handleSubmit = (event) => {
//   //     event.preventDefault(); //prevent page to reload when pressing the button submit
//   //     alert('Confirm adding food ' + this.state);

//   //     // alert(JSON.stringify(this.state));
//   //   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.displayForm}>Add Food</button>
//       </div>
//     );
//   }
// }

// export default AddFood;
