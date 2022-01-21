// import React from 'react';
// import { useState } from 'react';
import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FormAddFood from './components/FormAddFood';
import SearchBar from './components/SearchBar';


function App() {
  // - - - -  SHOW/HIDE FORM - - - - - - onclick
  // state to show the form when click on Add Food
  // showForm ->false --> is hide the form
  // showForm -> true --> the form is shown
  const [showForm, setShowForm] = React.useState(false);

  // - - - -  ONCHANGE -- retrieve the only ONE item to ADD
  //-->Fill the key 'name' of the FORM with the input - - - - - - 
  // initialStateFood first is empty --> name: "", calories: 0, image: ""
  // when someone fill out the form > name="name", name="calories", name="image"
  // when fill out the form, the input value changed, and calls--> onChange 
  // onChange--> to update stateFood and update --> stateFood-> with an item that has-> foodName, cal and image
  const initialStateFood = { name: "", calories: 0, image: "" }; // Empty the input forms
  // stateFood --> is the item added by the inputs form-> {name: "cookie", calories: 330, image: "http/..."}
  const [stateFood, setStateFood] = React.useState(initialStateFood);
  
  
  // - - - -  SUBMIT - submit item and add to the LIST - ALL ITEMS
  //-->Retrieve the values and add to the list
  // At first, 'foods' is default value for -> array ->  'listFood'
  // once an item is added --> the item is --> item -> 'stateFood' 
  // we'll need to keep the original list -> listFood  + 'stateFood'
  const [listFood, setListFood] = React.useState(foods); 


  // - - - -  STATE - SEARCH INPUT
  // copy after search to display original array
  const [listFoodCopy, setListFoodCopy] = React.useState(foods); 


  // ONCHANGE 
  //--> get the new object/item to add -->{name: "cookie", calories: 330, image: "http/..."}
  const handleFood = (event) => {
    const inputName = event.target.name; // <input name="foodName", name="calories",name="image"
    const inputValue = event.target.value; // typed by user
    // ...stateFood -> current values of the list -> { name: "", calories: 0, image: "" }
    // [inputName]: inputValue -> key value pair of--> name="name", name="calories", name="image"
    const newStateFood = { ...stateFood, [inputName]: inputValue };
    setStateFood(newStateFood)  // the new item --> ["name"]="cookies", ["calories"]=330, ["image"]='http/....'
    //console.log(newStateFood);
  }
  // ONSUBMIT
  // handle the submit of the form, adding an item to the current list of food
  const handleSubmitFoodToList = (event) => {
    // prevent the default behaviour of a form -> get request to the server
    event.preventDefault();

    // take the [listFood] array with food and ADD the item -> 'stateFood' to the current list
    // add the original listFood, and add the new item food
    setListFood([...listFood, stateFood])
    setListFoodCopy([...listFood, stateFood]) // copy to show after SEARCH
    // remove input values { name: "", calories: 0, image: "" }
    setStateFood(initialStateFood); // empty input values

    // the form dissapear after submit
    setShowForm(false); // hide the form
  }


  // --------------------
  // Search bar
  // --------------------
  // set the initial state of the SearchBox
  // look for the item inside the 
  const handleSearch = (event) => {
    const inputToCompare =  (event.target.value).toLocaleLowerCase();
    // filter to the current 'listFood' that is shown
    console.log('listFood', listFood)

    const searchItem = listFood.filter(item => {
      return item.name.toLocaleLowerCase().includes(inputToCompare) 
    })
    console.log('item to search', searchItem)
    // update the list only with "the item", one item searched
    //setIsSearch(true);

    //isSearch && setListFood(searchItem);
    //setListFoodCopy(searchItem);
    setListFood(searchItem)
  }

  // handle onBlur on the search input
  const handleBlur = (event) => {
    //console.log('Blur', listFoodCopy) 
    setListFood(listFoodCopy); // this is the copy with the items added
  }


  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <SearchBar onChangeSearch={handleSearch} onBlurSearch={handleBlur}/>
      
      <button 
      onClick={() => {
        setShowForm(true); // when click set to 'true'
      }}
      >+Add Food</button>
      {showForm && 
        <FormAddFood //{ name: "", calories: 0, image: "" }
          name={stateFood.name} 
          calories={stateFood.calories} 
          image={stateFood.image}
          onChangeHandle={handleFood}
          onSubmitHandle={handleSubmitFoodToList}
          />
        
      }

      <div className="columns">
        <div className="column">
        {listFood.map((item,index) => {
          //console.log(listFood)
          return (
            <FoodBox // props.food -> props.food.name, props.food.image, props.food.calories
              food={item} 
              key={index} // each child in a list need a 'key'
            />
          )
        })
        } 
        
      </div>
      </div>
    </div>
  );
}

export default App;
