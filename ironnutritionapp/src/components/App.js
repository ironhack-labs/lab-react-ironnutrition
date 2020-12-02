import foods from '../foods.json'
import './App.css';
import Foodbox from './Foodbox'
import FoodForm from './FoodboxForm';
import FoodboxList from './FoodboxList';

function App() {
  return (
    <>
    <FoodForm />
      <FoodboxList />
    </>
  );
}

export default App;
