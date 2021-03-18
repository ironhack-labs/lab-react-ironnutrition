import React, { Component } from 'react';

 class FormFood extends Component {
   state = {
     name: '',
     calories: '',
     image: '',
     isDisplayed: false,
   };

   toggleForm =() => {
       this.setState({
           isDisplayed: !this.state.isDisplayed
       })
   }

   handleFormSubmit = (event) => {
     event.preventDefault();
     this.props.addFood({
         name: this.state.name,
         calories: this.state.calories,
         image: this.state.image,
     })

     this.setState({
       name: '',
       calories: '',
       image: ''
     });

   }

   handleInput = (event) => {
       this.setState({ [event.target.name]: event.target.value  } )
   }

//    handleNameSubmit = (event) => {
//      this.setState({
//        name: event.target.value,
//      });
//    };

//    handleCaloriesSubmit = (event) => {
//      this.setState({
//        calories: event.target.value,
//      });
//    };

//    handleImageSubmit = (event) => {
//      this.setState({
//        image: event.target.value,
//      });
//    };

   render() {
     return (
         <div>
             <button onClick={this.toggleForm}>add new food</button>
       { (this.state.isDisplayed) && (
             <form onSubmit={this.handleFormSubmit}>
             <div>
               <label htmlFor="name">Name</label> <br />
               <input
                 type="text"
                 name="name"
                 id="name"
                 value={this.state.name}
                 onChange={this.handleInput}
            
               />
             </div>
    
             <div>
               <label htmlFor="calories">Number of Calories</label> <br />
               <input
                 type="number"
                 name="calories"
                 id="calories"
                 value={this.state.calories}
                 onChange={this.handleInput}
                 
               />
             </div>
    
             <div>
               <label htmlFor="image">Image</label> <br />
               <input
                 type="text"
                 name="image"
                 id="image"
                 value={this.state.image}
                 onChange={this.handleInput}
            
               />
             </div>
    
             <button>Submit</button>
           </form>
       )}
     
       </div>
     );
   }
 }

 export default FormFood;