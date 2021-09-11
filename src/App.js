import React, {useEffect} from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/foodBox';
import 'bulma/css/bulma.css';
import FormFood from './components/FormFood/formFood';
import SearchBar from './components/SearchBar/searchBar';
import ListBox from './components/ListBox/listBox';


const listFoodToday = [];

function App() {
  
  const [foodListState, setFoodListState] = React.useState([]);

  const handleCreateListFood = (list)=>{
    console.log('elemento que esta sendo passado --->', list);
    console.log('foodlistsate dentro do handle--->', foodListState);

    console.log('list food today dentro do handle ---->',listFoodToday);

    setFoodListState([...foodListState, list]);
    console.log('apos o push e o ser state -----', foodListState, 'list ---> ', list, 'elemento desfrag,entado----', ...foodListState);

  }
  
// useEffect(()=>{setFoodListState(listFoodToday);},[listFoodToday])

  const arrayFood =  foods.map( (elem,index) => <FoodBox 
  name = {elem.name} 
  calories = {elem.calories} 
  image = {elem.image} 
  key = {index}
  quantity = {elem.quantity}
  createListFood = {handleCreateListFood}
  />); 


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
    const newFoodBox = <FoodBox name = {food.name} calories = {food.calories} image = {food.image} key = {new Date()} quantity = {food.quantity} createListFood = {handleCreateListFood}/>
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
        key = {new Date()}
        quantity = {elem.quantity}
        createListFood = {handleCreateListFood}
      />);
      
      setFoodsState(newArrayFoodBlockSearch);
         
    }else{
      setFoodsState(foods.map( (elem,index) => <FoodBox 
      name = {elem.name} 
      calories = {elem.calories} 
      image = {elem.image} 
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
        <div>
          <button onClick = {()=> addForm(form, setForm)} className = "button is-medium is-rounded is-danger">
          Form
          </button>
          <FormFood createFoods = {handleCreateFood} formView = {handleForm} />
        </div>
      )
      }
      <div className = "foods-list">
        <div>
          {foodsState}
        </div>
        <div className = "todays-food title is-2">
          <h2>Today's foods</h2>

          <ul className = "title is-4">
            
             {console.log('foodliststate ===>',foodListState)}
             <ListBox list = {foodListState}  />
            
          </ul>
          <p> TOTAL CALORIES</p>
        </div>
      
      
      </div>
      
     
    </main>
  );
}

export default App;
