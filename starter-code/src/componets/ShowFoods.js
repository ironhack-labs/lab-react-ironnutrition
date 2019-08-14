import React, {Component} from 'react'
import foodsJson from '../foods'
import FoodComponent from './FoodComponent'
import AddFood from './AddFood'
import TodayFood from './TodayFood'


class ShowFoods extends Component {

    constructor(props){
        super(props);
        this.state={
            foods: foodsJson

        }
        

     
    }

    addOneFood = food => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(food)

        this.setState({
            foods: foodsCopy
        })
    }

    searchFood = food => {
        let x=food.target.value

        const foodsCopy = [...foodsJson]
       
        const nuevoArray = foodsCopy.filter(elm => 
          
            
            elm.name.toLowerCase().includes(x.toLowerCase()))
       

        this.setState({
            foods: nuevoArray
        })
    }

    addOneFoodToday = food => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(food)

        this.setState({
            foods: foodsCopy
        })
    }
    totalFood = idx => {

        let contactsCopy = [...this.state.contacts]
        contactsCopy.splice(idx, 1)

        this.setState({
            contacts: contactsCopy
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
               

                        <input type="text" name="calories"  onChange={this.searchFood} placeholder="Search..."/>
                    
                
                </div>
                <div className="row">
                    
                <div className="col-md-6">

                        {this.state.foods.map((elm, idx) => {



                            return <FoodComponent key={idx} {...elm} deleteC={() => this.totalFood(idx)} />


                        })


                        }

                </div>
                    <div className="col-md-6">

                        <AddFood addFood={this.addOneFood}/>
                        <h2>Today's Food</h2>
                        <TodayFood />
                        <h5>Total: calories</h5>

                    </div>

                   

                    
                </div>
          
            </div>
        )
    
    
    }


}


    export default ShowFoods;