import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  return(
    <div className="App">

{foods.map((e) => {
        return (
          <div>
            <FoodBox food={e} />

    </div>

        );
      })}
</div>)}
export default App;