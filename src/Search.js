import React, { Component } from 'react';
import foods from './foods.json';


class Search extends Component{
state ={
    name:"",
    foods: foods
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    console.log('search')
    let copyFoods = [...this.state.foods];
    copyFoods.filter(food => food.name.toLowerCase().includes(this.state.name))
    console.log()
    
    this.setState({
        foods: copyFoods
    })

}



  
    
        render (){
            return (
                <>
                <form onSubmit={this.handleSubmit}>

                <input type="text" name="name" placeholder="name" onChange={this.handleChange}/>

                <button>Search</button>
                </form>

             
           
  
    
    
    
    
               </>
            )
        }
    }
    
    export default Search;