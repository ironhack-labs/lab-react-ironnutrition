import React,{Component} from 'react';
import './App.css';
import foods from './foods.json';
import { v4 as uuidv4 } from 'uuid';
import Col1 from './components/col1/Col1';
import NewForm from './components/Form/NewForm';

// add an Id to each element of the array
const newFoodArray = foods.map(el => {return{...el, id : uuidv4()};});


class App extends Component {

  state = {
    foodList : [...newFoodArray],
    formState : false,
    search : ''
  }

  // while the input form is filled, the value is stored in the state search 
  handleOnChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  // return the list of dishes, full or filtered by search value
  getDishBySearchFilter = () => {
    const { foodList, search } = this.state

    return foodList.filter(dish => {
      if (dish.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });
  }

  // when clicked, the stateform switch to True & the form is displayed
  setFormStateToTrue = () => {
    this.setState({formState : true});
  }

  // when the form is submitted, a new dish is added to the list  & the form is hidden
  addDish = (dish) => {
    const newDish = {...dish,id: uuidv4()}
    
    this.setState({ 
      foodList: [newDish, ...this.state.foodList] ,
      formState : false
    })
  }



  render() {
    const { search, formState } = this.state
    const list = this.getDishBySearchFilter();

    return (
      <div className="App container mt-5">

        {/* search form */}
        <div>
            <label htmlFor="search" >Search</label>
            <input id="search" name="search" type="text" value={search} onChange={this.handleOnChange} />
        </div>

        {/* add dish form */}
        {formState ? <NewForm addDish={this.addDish}/>
          : <button onClick={this.setFormStateToTrue}>add dishes</button>
        }
        
        {/* list of dishes */}
        <Col1 foodList={list}/>
        
      </div>
    );
  }
}

export default App;




