import React, { Component } from 'react';
import foods from './foods.json'



class Food extends Component {

    state = {
        listofFoods : foods,
        foodCount: 3,
        style : { height : "4vw" },
        showForm : false,
        nameVal : '',
        calVal : '',
        imgVal : '',

        

    }

    

    addName(e){

        this.setState({
            nameVal: e.target.value
        })

    }
    AddCal(e){

        this.setState({
            calVal: e.target.value
        })

    }
    addImg(e){

        this.setState({
            imgVal: e.target.value
        })

    }


    addNewFood(){
        this.setState({
            showForm: true
        })
    }

    submitButton(e){
        e.preventDefault();



        this.setState({ showForm: false, foodCount: 4 })
    }


    showForm(){
        if(this.state.showForm){

            return (
                <form>
                <label>Name</label>
                <input type="text" placeholder="Name"  onChange={(e1) =>{    this.addName()     }}/>

                <label>NUMBER OF Calories</label>
                <input type="number" placeholder="cal" onChange={(e2) =>{    this.AddCal     }}/>

                <label>Image</label>
                <input type="text" placeholder="image" onChange={(e3) =>{    this.addImg()     }}/>
                
                <button onClick={()=>{   this.submitButton()  }}>Done</button>

            </form>

            )
        }

    }



    render(){
        return(





            <div>
                    {this.state.listofFoods.map((eachFood, Index) =>{
                        return (

                            <div key={Index}>
                                <div>
                                    <img src = {eachFood.image} style ={this.state.style}/>
                                </div>    
                                <div>
                                    <p>{eachFood.name}</p>
                                    <p>{eachFood.calories}</p>
                                </div>

                            </div>
                        )
                    })}
           



            </div>
            // <div>   
                
            //     <button onClick = {() =>{  this.addNewFood()     }}>Add new food</button>

                
            //         {this.state.foods.slice(0,this.foodCount).map((eachElement, Index) =>{
            //             return (
            //             <div key={Index}>
            //                 console.log(eachElement)
            //                 <div>
            //                     <img src={eachElement.image} style = {this.state.style} />

            //                 </div>
            //                 <div> 
            //                     <p>{eachElement.name}</p>
            //                     <p>{eachElement.calories}</p>
            //                     <p>{eachElement.quantity}</p>
            //                     <button>+++</button>
            //                 </div>    
            //             </div>
            //             )
            //         }) }


            //         {this.showForm()}
                
            // </div>




        )
    }
}




export default Food;