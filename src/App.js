import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import FoodBox from './components/FoodBox'
import foods from './foods.json';

//import NewFood from './components/NewFood'


function App() {

     const [getFoods, setFoods] = useState(foods)
     const [form,setForm] = useState(false)
     const [name, setName] = useState("")
     const [calories,setCalories] = useState(0)
     const [image,setImage] = useState("")
     const [search, setSearch] = useState("")
     const [todayFood, setTodayFood] = useState([])
        

    const newFoodItem = element => {
        element.preventDefault()
        setFoods([...getFoods, {name,calories,image}])
        setForm(!form)
    }

    const searchFoodItem = element => {
        element.preventDefault()
        setFoods([search])
    }

    const addTodayFood = (name , calories) => {
        setTodayFood([...todayFood, {name,calories}])
    }
  

  return (
 <div className="App">
     
        <div className="container">
            <h1 className="title">IronNutrition</h1>
        </div>


        {!form &&
        <div>
          <input type="text" className="input search-bar" name="search" placeholder="Search a food" value="" />
        </div>}
 

        {!form && 
        <button onClick={() => {setForm(true)} } className="button my-btn is-success" >
            Add New Food
        </button>}

        {form &&  
        <form onSubmit={newFoodItem} >
            <div className="field">
            <label className="label" htmlFor="name">Name:</label>
                    <div className="control">
                        <input placeholder="What's the food called?" className="input my-input" type="text" name="name" id="name-input"  value={name} onChange={e => setName(e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="calories"># of calories:</label>
                    <div className="control">
                        <input placeholder="Number of Calories" className="input my-input" type="number" name="calories" id="calories-input" value={calories} onChange={e => setCalories(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="image">Image URL</label>
                    <div className="control">
                        <input placeholder="Insert the URL" className="input my-input" type="text" name="image" id="image-input"  value={image} onChange={e => setImage(e.target.value)}/>
                    </div>
                </div>
                <button  className="button my-btn is-success" style={{ margin: "20px 0" }}>Add new food</button>
            </form>
}


      {!form &&
      <div class="columns">
      <div class="column">
      {getFoods.map((food, index) => 
      <FoodBox key={index} food={food} quantity={food.quantity} />)} 
      </div>

      <div className="column content">
        <h2 className="subtitle">Today's foods</h2>
        <ul>
            {todayFood?.map((food,index)=>(
                <li key={index}>{food.name} = {food.calories}</li>
            ))}

        </ul>
        <strong>Total:</strong>
      </div>
  </div> }
</div>

  );
}

export default App;
