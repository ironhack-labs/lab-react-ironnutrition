import React, {useEffect} from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/foodBox';
import 'bulma/css/bulma.css';
import FormFood from './components/FormFood/formFood';
import SearchBar from './components/SearchBar/searchBar';
import ListBox from './components/ListBox/listBox';


const listFoodToDisplay = [];

function App() {
  
  

  const [foodListState, setFoodListState] = React.useState(listFoodToDisplay);

  const handleCreateListFood = (list)=>{
    
    //Primeiro array de foods a ser criado, ainda sem processamento
    listFoodToDisplay.push(list);
    setFoodListState([...listFoodToDisplay]);
    

  }

  const arrayFood =  foods.map( (elem,index) => <FoodBox 
  name = {elem.name} 
  calories = {elem.calories} 
  image = {elem.image} 
  key = {index}
  quantity = {elem.quantity}
  createListFood = {handleCreateListFood} 
  />); 
  
// useEffect(()=>{setFoodListState(listFoodToday);},[listFoodToday])



  const [form, setForm] = React.useState(true);
  const [foodsState, setFoodsState] = React.useState(arrayFood);
  


  function addForm(form, setForm){
    setForm(!form);
  }

  const handleCreateFood = (food)=>{
    foods.push(
      {
        name: food.name,
        calories: food.calories,
        image: food.image,
        quantity: 0
      }
    )

    const newFoodBox = <FoodBox 
      name = {food.name} 
      calories = {food.calories} 
      image = {food.image} 
      key = {new Date() + food.name} 
      quantity = {food.quantity} 
      createListFood = {handleCreateListFood}     
    />

    setFoodsState([...foodsState, newFoodBox]);
  }

  const handleSearchFood = (search) =>{
    if( search.length > 0){
      
      const newArrayFoodSearch = foods.filter((food)=> {
        return food.name.toLocaleUpperCase().includes(search.toLocaleUpperCase())
      });
      
      const newArrayFoodBlockSearch = newArrayFoodSearch.map( (elem,index) => <FoodBox 
        name = {elem.name} 
        calories = {elem.calories} 
        image = {elem.image} 
        key = {index}
        quantity = {elem.quantity}
        createListFood = {handleCreateListFood}
      />);
      
      setFoodsState(newArrayFoodBlockSearch);
         
    }else{
      setFoodsState(foods.map( (elem,index) => <FoodBox 
      name = {elem.name} 
      calories = {elem.calories} 
      image = {elem.image} 
      key = {index}
      quantity = {elem.quantity}
      createListFood = {handleCreateListFood}
    />));
    }
  }

  const handleForm = () =>{
    setForm(!form);
  }
  

  return (
    <main>
        <h1 className = "title is-1"> Iron Nutricion </h1>
        <SearchBar searchFood = {handleSearchFood} />
      
      {
      form?
      <button onClick = {()=> addForm(form, setForm)} className = "button is-medium is-rounded is-info">
      Add Food
      </button>
      :
      (
        <div className="form-create-food">
          <button onClick = {()=> addForm(form, setForm)} className = "button is-small is-rounded is-danger">
          Return
          </button>
          <FormFood createFoods = {handleCreateFood} formView = {handleForm} />
        </div>
      )
      }
      <div className = "foods-list">
        <div>
          {foodsState}
        </div>
        <div className = "todays-food title is-3">
          <h2>Today's foods</h2>

          <ul className = "subtitle is-5">
            
             <ListBox list = {foodListState}  />
       
          </ul>
          <p className="subtitle is-4"> Total:  {foodListState.reduce((ac,elem)=>ac+elem.calories*elem.quantity,0)} calories. </p>
        </div>
      
      
      </div>
      
     
    </main>
  );
}

export default App;
