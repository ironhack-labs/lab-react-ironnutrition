import "bulma/css/bulma.css";
import foods from "./foods.json";
import "./components/foodbox/Foodbox";
import Foodbox from "./components/foodbox/Foodbox";

function App() {
  return (
    <div className="App">
      <Foodbox food />
    </div>
  );
}

export default App;
