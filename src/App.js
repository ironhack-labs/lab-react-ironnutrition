import './App.css';
import foods from "./foods.json"


function App() {
  return (<div className="App">

    {foods.map(food =>
      <div>
        <p>Food_name_here</p>
        <img src={food.image} width={100} alt={food.n}/>
   
    </div> )}
   </div>
  );
    }
    
    
export default App;

