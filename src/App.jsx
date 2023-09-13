import { useState } from "react";
import "./App.css";
import FoodList from "./components/FoodList";
import { Row, Divider } from "antd";
import SearchBar from './components/SearchBar'



function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const updateSearchTerm = (query) => {setSearchTerm(query)};




  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      
      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
      <SearchBar fnSearch = {updateSearchTerm}/>
      <FoodList searchTerm = {searchTerm}/>
      </Row>


    </div>
  );
}

export default App;