import React, {useState, useEffect} from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'


function App() {
  const [food, setfood] = useState(foods)
  const [form, setform] = useState(false)
  const [name, setname] = useState('Turkey')
  const [image, setimage] = useState('https://upload.wikimedia.org/wikipedia/commons/4/4d/Wild_turkey_eastern_us.jpg')
  const [calories, setcalories] = useState(100)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setfood([...food, {name, image, calories}])
    setname('')
    setimage('')
    setcalories(0)
}
  
  
  useEffect(() => {
      setfood(foods)
  }, [])


  return food ? (
    <div className="App">
      <button onClick={() => setform(!form)}>Add Food</button>
      {form ? (
        <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={e => setname(e.target.value)}
        />

        <label>Director:</label>
        <input
          type='text'
          name='image'
          value={image}
          onChange={e => setimage(e.target.value)}
        />

        <label>calories:</label>
        <input
          type='text'
          name='calories'
          value={calories}
          onChange={e => setcalories(e.target.value)}
        />

        <button>Submit</button>
      </form>
      ) : ''}
      {food.map((el, ind) => (
        <FoodBox key={ind} food={el}></FoodBox>
      ))}
    </div>
  ) : <h1>"Loading"</h1>
}

export default App;
