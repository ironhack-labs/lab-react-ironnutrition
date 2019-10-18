import React from 'react';

class Form extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      calories: '',
      image: '',
      visibility: 'hidden',
    }
  }

   showForm = () => {
    if(this.state.visibility === 'hidden'){
      this.setState({
        visibility: 'visible'
      })
    } else {
      this.setState({
        visibility: 'hidden'
      })
    }
   }

   handleFoodNameInput = (event) => {
     this.setState({
       name: event.target.value
     })
   }

   handleCaloriesInput = (event) => {
     this.setState({
       calories : event.target.value
     })
   }

   handleImageInput = (event) => {
    this.setState({
      image : event.target.value
    })
  }

   handleFormSubmit = (event) => {
     event.preventDefault();
     this.props.addTheFood(this.state);
     this.setState({
       name: '',
       calories: '',
       image: '',
     })
   }

   render() {

     return(


       <div>

         <button onClick={this.showForm}>
           Add Food Item
         </button>

         <div style={{visibility: this.state.visibility}}>

           <form onSubmit={this.handleFormSubmit}>
             <legend>Food Name</legend>
             <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleFoodNameInput(e)} />

             <legend>Number of Calories</legend>
             <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)} />

             <legend>Image</legend>
             <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleImageInput(e)} />

             <button onClick={this.showForm}>Submit</button> 
             {/* <input type="submit" value="Submit" /> */}
           </form>

         </div>

       </div>
     )
   }

}


export default Form;