import React,{Component} from "react";
import 'bulma/css/bulma.css';
import foods from '../foods.json';
import Box from "./Box"



class Foodbox extends Component{
    state ={
        allFoods:[...foods],
        formFood:false,
        name:'',
        calories:'',
        image:'',
        quantity:'',
        search:'',
        filterOn:false,
        filterSearch:[],
        addedFoods:[],
        elementFood:[]
    }
    handleAddFood(){
        this.setState({
            formFood:true
        })
    }
    handleBack=()=>{
        this.setState({
            formFood:false
        })
    }
    handleChange(event){
        let {name,value} = event.target;
        
        this.setState({
            [name]:value
        })
        console.log([value])

    }
    handleSubmit=(event)=>{
        event.preventDefault()
        let copyAllFoods = [...this.state.allFoods]
        if(this.state.name==='' || this.state.calories===''){
            return alert("Os campos com * devem ser preenchidos")
        }else if(!Number(this.state.calories)){
            return alert("O campo calorias precisar ser preenchido com um número")
        }else{
            let nFood = {
                name:this.state.name,
                calories:parseInt(this.state.calories),
                image:this.state.image,
                quantity:0
            }
            copyAllFoods.push(nFood)
            this.setState({
                allFoods:copyAllFoods,
                formFood:false,
                name:'',
                calories:'',
                image:'',
                quantity:''

            })
        }
    }
    handleSearch=(event)=>{
        let copyArr =[...this.state.allFoods]
        let {value} = event.target

        this.setState({
            search:value.toLowerCase()
        })
        
        let filtCopyArr = copyArr.filter(element=>element.name.toLowerCase().indexOf(this.state.search) >-1)
        
        if(value.length===0){
            this.setState({
                filterOn:false
            })
        }else{
            this.setState({
                filterSearch:filtCopyArr,
                filterOn:true

            })
        }

    }
    funcAd=(event)=>{
        let{value,name} = event.target
        let copyArr = [...this.state.allFoods]

        let indx = copyArr.findIndex(element=>element.name===name)
        copyArr[indx].quantity = value

        this.setState({
            allFoods:copyArr
        })
        
    }
    handleAddListFood=(event)=>{
        event.preventDefault()
        // let{value,name} = event.target
        // let copyArr1 = [...this.state.allFoods]

        // let indx = copyArr1.findIndex(element=>element.name===name)
        // copyArr1[indx].quantity = value

        // this.setState({
        //     allFoods:copyArr1
        // })


        //teste
        let copyArr = [...this.state.addedFoods]
        let elementsQtd = this.state.allFoods.find(element=>element.quantity > 0)
        if(elementsQtd){
        copyArr.push(elementsQtd)
        this.setState({
            addedFoods : copyArr
        })
        
        let backQtd0 = this.state.allFoods.map(element=>{element.quantity=0
        return element})
        this.setState({
            allFoods:backQtd0
        })
        }
    }
        

    render(){
         return this.state.formFood?(
         <div id="form-food">
               
            <h2 id="form-food-page">Form Food</h2>
            
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <labe>Food Name</labe><br/>
                <input type="text" name="name" value={this.state.name} onChange={(e)=>{this.handleChange(e)}}></input>*<br/>
                <label>Calories</label><br/>
                <input type="text" name="calories" value={this.state.calories} onChange={(e)=>{this.handleChange(e)}}></input>*<br/>
                <label>Image</label><br/>
                <input type="text" name="image" value={this.state.image} onChange={(e)=>{this.handleChange(e)}} placeholder="Insira o Url da Imagem"></input><br/>
                <div id="btns-form"> 
                <button onClick={()=>this.handleBack()}>Back</button> 
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>):
        (<>
            <form>
                <input id="search-food" name="search" type="text" placeholder="Search food" value={this.state.search} onChange={(e)=>this.handleSearch(e)}></input>
            </form>
        

         <button id="btn-addFood" onClick={()=>this.handleAddFood()}>AddFood</button>
         <div id="container-part">
            <div id="food-part">
                {
                    this.state.filterOn ?
                    this.state.filterSearch.map(element=> <Box name={element.name} key={element.name} image={element.image} calories={element.calories}/>)
                    :
                    this.state.allFoods.map(element=> <Box name={element.name} key={element.name} image={element.image} calories={element.calories} funcAd={this.funcAd} handleAddListFood={this.handleAddListFood} quantity={element.quantity}/>)
                }
            </div>
            <div id="addFood-part">
                <h2 id="title-today">Today's foods</h2>
                <ul id="food-list">
                    {this.state.addedFoods.map(element=><li className="list-addedFood">{element.quantity} {element.name} = {element.calories * element.quantity}</li>)
                    }
                </ul>
                <p id="food-part-total-calories">Total: {this.state.addedFoods.reduce((acc,element)=>acc + (element.calories * element.quantity),0)} cal</p>
            </div>
        </div>
         {/* {this.state.allFoods.map(element=> <Box name={element.name} key={element.name} image={element.image} calories={element.calories}/>)} */}
         </>
         )
    }
}

export default Foodbox;