import React ,{Component} from 'react';
import Foods from '../../foods.json';
import Boxes from './boxes'
import './foodBox.css'
import Form from "./NewForm"
import SearchBar from './searchBar'
class FoodBox extends Component{
    constructor(){

        super()
        this.state = {

            food:Foods,
            searchTerm:''
        }
    }
    editSearch =(e) =>{
        this.setState({searchTerm: e})
    }
    addFood = newFood => {
        console.log("paco",newFood)
        const foodCopy = [...this.state.food]       // <= OJO! Copia
        foodCopy.push(newFood)
        
        this.setState({ food: foodCopy})
    }
    showIt(){

        return <Form/>
    }
    dynamycSeach(){

       let newArr = this.state.food.filter(food => food.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
       console.log(this.state.searchTerm)
       if(this.state.searchTerm == '')
        newArr= Foods
        this.setState({
            food: newArr
        })
    }
    render(){
        
        return(
            <>
            <button onClick={this.addFood}>añade uno</button>
            <Form addFood={this.addFood}/>
            <input  key="random1" value={this.state.searchTerm} placeholder={"search food"} onChange={(e) => this.editSearch(e.target.value) & this.dynamycSeach()}/>
            
         {this.state.food.map(elm =><Boxes    key={elm.id} {...elm}/> )} 
            </>
            )
    }
}

export default FoodBox