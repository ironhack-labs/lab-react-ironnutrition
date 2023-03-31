import './App.css';
import Foodlist from './components/Foodlist/Foodlist';
import foods from "./foods.json";

function App () {
  return <div className="App">
    <Foodlist foods={foods} />
  </div>;
}
export default App;