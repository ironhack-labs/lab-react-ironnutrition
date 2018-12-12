import React, {Component} from 'react'
import foods from '../foods.json'
import Food from './Food'
import 'bulma/css/bulma.css';
import Form from './Form'

class FoodBox extends Component{

   state={
       showForm:false,
       promo: {},
       food:foods,
       items:[]
   }
   toggleForm = () =>{
       let {showForm} = this.state;
       showForm = !showForm
       this.setState({
       showForm
       })

   }
   onChange = e=>{
       const value = e.target.value;
       const field = e.target.name;
       const { promo } = this.state;
       promo[field] = value;
       this.setState({
           promo
       });
   }
   handleSubmit = e=>{
       e.preventDefault()
       let {food,promo} = this.state;
       food.push(promo)
       this.setState({
       food
       })
       this.toggleForm()
   }
   buscar = e =>{

       const searc = e.target.value;
       console.log(searc)
       var updatedList = this.state.food;
       updatedList = updatedList.filter(function(item){
       return item.name.toLowerCase().search(
       searc.toLowerCase()) !== -1;
   });
   this.setState({items: updatedList});

   }
   componentWillMount= function(){
       this.setState({items: this.state.food})
     }


agregar = function (){
  
}

   render(){
       const { items, showForm } = this.state;

       return (<div>

       <button onClick={this.toggleForm}>{showForm ? "Cancelar" : "Agrega una comida"}</button>
       <input type="text" onChange={this.buscar} placeholder="buscador"/>
       {showForm && <Form onChange={this.onChange} handleSubmit = {this.handleSubmit}/>}
       {items.map((items,key)=>
       <Food key={key} {...items} agregar={()=>this.agregar(key)}/>)}

       </div>

       );
   }
}
export default FoodBox