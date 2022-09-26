import { Component } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
import FoodList from './components/FoodList/FoodList';
import foods from './foods.json';
import { v4 as uuidv4 } from 'uuid';
import { Layout, Button } from 'antd';
import { Content } from 'antd/lib/layout/layout';

//const foods = foodsArr.map(food => food.id = uuidv4())


class App extends Component {
  state = {
    foods: [...foods],
    showForm: false,
    searchText: '',
  };

  toggleShowForm = () => {
    this.setState((prevState) => ({ showForm: !prevState.showForm }));
  };

  addFood = (food) => {
    const foodToAdd = {
      ...food,
      id: uuidv4(),
    };

    this.setState({ foods: [foodToAdd, ...this.state.foods] });
  };

  onDeleteFood = (id) => {
    this.setState((prevState) => ({
      foods: prevState.foods.filter((food) => food.id !== id),
    }));
  };

  handleSearch = (event) => {
    const { value } = event.target;
    this.setState({ searchText: value });
  };

  getFoodsToRender = () => {
    const { foods, searchText } = this.state;

    if (searchText) {
      return foods.filter((food) => {
        return (
          food.name.toLowerCase().includes(searchText.toLowerCase())
        );
      });
    }
    return foods;
  };

  render() {
    const { showForm, searchText } = this.state;

     const foods = this.getFoodsToRender();

    return (
      <Layout>
        <Content
          style={{
            padding: '0 50px',
            minHeight: '100vh',
            backgroundColor: 'white',
          }}
        >
          <div className="App">
            <label htmlFor="search">Search:</label>
            <input
              id="search"
              name="search"
              value={searchText}
              onChange={this.handleSearch}
            />

            <Button onClick={this.toggleShowForm}>
              {showForm ? 'Hide form' : 'Add new food'}
            </Button>

            {showForm && <AddFoodForm addFood={this.addFood}></AddFoodForm>}

            {foods.length > 0 ? (
              <FoodList
                foods={foods}
                onDeleteFood={this.onDeleteFood}
              ></FoodList>
            ) : (
              <div height={500}>
                "Oops! We don't have any food to show you :("
              </div>
            )}
          </div>
        </Content>
      </Layout>
    );
  }
}

export default App;
