import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/Addfood';

export default class App extends Component{

  state = {
    foods:[...foods],

    showForm: false,
    search=''
}
showForm =() =>{
  this.setState({state.showForm: true})

};
onAddFoodSubmit =(food) =>{
  this.setState((old) => ({foods: [{...food, id: uuidv4(),quantity: 0}, ...old.foods]})) 
  this.setState({this.state.showForm: false})
    search:''
}
//en la función handleSearch le pasamos un evento y al cambiar el state le pasaremos el valor del evento
handleSearch = (e)=>{
  this.setState({
    search:e.target.value})
}
//Si tenemos search filtramos por nombre, pasamos a minuscula y le decimos que nos quedamos conlos que esten lo que haya en el search. Si no hay nos devuelve el listado completo.
filterFood = ()=>{
  if(this.state.search){
    return this.state.foods.filter(food => food.name.toLowerCase().includes(this.state.search.toLowerCase()))
  }
    return this.state.foods
}

render() {//Metemos un input que contenga en el onChange la función anteriormente definida y en el value el search del state
  return (
    <div className='container'>
          <div className="mx-auto mt-5 mb-3" >
            <input
              placeholder="Type for searching..." type="text"
              className="form-control" style={{width:'40rem', height:'2rem', border:'2px solid blue'}} onChange={this.handleSearch} value={this.state.search}
            />
            </div>
      
      
    <div className="Album ">
            <div className="container ">

            {// Muy importante......
              //Ahora el map se lo hacemos a la array que nos devuelve el filter............
                this.filterFood().map((food)=>(
                <div key={food.name}>
                  <FoodBox {...food}/>
                </div>
                ))
            }
          </div>   
     </div> 
     </div>     
   
  )
}
 
}
    
   


