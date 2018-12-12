import React, {Component} from 'react'
import foods from '../foods.json'
import Food from './Food'
import Form from './Form'
import Foods from './Foods'


var valor = 0
var multiplicacion = 0
var suma = 0
 class Foodb extends Component{
     state={
        showForm:false,
        promo: {},
        food:foods,
        items:[],
        lista:[]
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
    
    encambio = (e) =>{
        valor = e.target.value;
        const field = e.target.name;   
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
    
    agregar = function(index){
        const copy = this.state.food;
        copy[index].quantity = valor
        multiplicacion = copy[index].quantity * copy[index].calories
        copy[index].mult = multiplicacion
        suma += copy[index].mult
        this.setState({
            food: copy
        })
        this.state.lista.push(copy[index])
        
        
        valor = 0
     }
    componentWillMount= function(){
        this.setState({items: this.state.food})
      }
    
  
    render(){
        const { items, showForm,lista } = this.state;
       
        return (<div>
            <div id="lis">
        <button onClick={this.toggleForm}>{showForm ? "Cancelar" : "Agrega una comida"}</button>
        <input type="text" onChange={this.buscar} placeholder="buscador"/>
        {showForm && <Form onChange={this.onChange} handleSubmit = {this.handleSubmit}/>}
        {items.map((items,key)=><Food key={key} {...items} agregar={() => this.agregar(key)} onChange={this.encambio}/>)}
        </div>
        <div id="lista">
            <h2>Todays foods</h2>
            <ul>
            {lista.map((items,key)=> <Comida key={key} {...items}/>)}
            </ul>
            <h4>Total:{suma}</h4>
        </div>
        </div>
        
        );
    }
}
export default Foodb 