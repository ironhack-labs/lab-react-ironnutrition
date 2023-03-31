import './App.css';
import Foodlist from './components/Foodlist/Foodlist';
import foodsData from "./foods.json";

function App () {
  return <div className="App">
    <Foodlist foodsData={foodsData} />
  </div>;
}
export default App;