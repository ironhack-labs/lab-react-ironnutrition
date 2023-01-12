import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  return(
    <div className="App">

       {foods.map((e) =>{
return (
<div id='Food' key= {e.name} >   
<p className="Name">{e.name}</p>
<img className="Image" src={e.image} alt='food'/>
</div> )
})}

<FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />
    </div>  
   )
}
export default App;