import React, {Component} from 'react'
import foods from '../foods.json';
import Form from './Form';
import Search from './Search';


class foodBox extends Component {
//espacio para mi codigo js
    constructor (){
        super ()
        this.state = {
            foods: foods,
            isClicked: false,
            filter: foods
            
        }
    }
    //cambie el estado del formulario
    showForm = () => {
        this.setState({isClicked: !this.state.isClicked})
    }
    //agrego cada comida nueva  a mi lista
    insertFood = (newFood) => {
        const copyFood = [...this.state.foods]
        copyFood.push(newFood)
        this.setState({foods: copyFood})
    }

   searchFood = (foodName)=>{
       const copyFood= [...this.state.foods]
       const newFoodArray= copyFood.filter((e)=>e.name.includes(foodName))
       this.setState({filter: newFoodArray})
   }

    render () {
        return (
          <div className="container">
            <div>
                {/* si hay click que me agregue la comida ternario ?condicion :expresion */}
                {this.state.isClicked ?<Form addFood={this.insertFood}/>:null}
              
                <button onClick={this.showForm}>Add food</button>
            </div>
            <Search searchFood={this.searchFood}/>
            {/* <Search onChange={(foodName)=>this.searchFood(foodName)}/> */}

            <div className="box">

            {/* Que me devueva el array con cada comida de mi foods.json, EJ DynamicMoviesList */}

            {this.state.filter.map((food, index) => {

                return(
                    <article className="media">
                            <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={food.image} alt='hola'/>
                            </figure>
                            </div>
                            <div className="media-content">
                            <div className="content">
                                <p>
                                <strong>{food.name}</strong> <br />
                                <small>{food.calories}</small>
                                </p>
                            </div>
                            </div>
                            <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                <input className="input" type="number" value="1" />
                                </div>
                                <div className="control">
                                <button className="button is-info">
                                    +
                                </button>
                                </div>
                            </div>
                            </div>
                        </article>

                )
                
                      
                 
            })}
            </div>
        </div>
        
        )
    }
}


export default foodBox;