import 'bulma/css/bulma.css'
import FoodList from './foodlist/FoodList'

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">IronNutrition</h1>

        <div className="columns">
          <div className="column">
            
            <FoodList />
            
          </div>
          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              <li>1 Pizza = 400 cal</li>
              <li>2 Salad = 300 cal</li>
            </ul>
            <strong>Total: 700 cal</strong>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
