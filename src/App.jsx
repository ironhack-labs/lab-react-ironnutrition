import './App.css'
import FoodBox from './components/FoodBox'
import foodsJson from './foods.json'
function App () {
  return (
    <div className='App'>
      <FoodBox foods={foodsJson} />
    </div>
  )
}

export default App
