import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [allFood, setFoods] = foods
  console.log({ALLFOOD: foods}) 

  return (
    <div className="App">
 <iframe src="https://free.timeanddate.com/clock/i8kna5ii/n179/fn6/fs16/fc9ff/tc000/ftb/bas2/bat1/bacfff/pa8/tt0/tw1/th1/ta1/tb4" frameborder="0" width="216" height="60"></iframe>

{foods.map((food) => {

console.log({QUICKTES:food.image})
return <div>
  <p> {food.name} </p>
  <img src={food.image} width={100} />
</div>
})}

  <FoodBox food={{
    name:"Orange",
    calories: 85,
    image: "https://i.imgur.com/abKGOcv.jpg",
    servings: 1
  }}/>
 
    </div>
  );
}

export default App;
