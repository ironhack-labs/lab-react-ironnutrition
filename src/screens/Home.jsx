import { Component } from 'react';
import FoodList from '../components/FoodList/FoodList';
import AddFoodForm from '../components/Form/AddFoodForm/AddFoodForm';
import FormControl from '../components/Form/FormComponents/FormControl';
import Input from '../components/Form/FormComponents/Input';
import foods from '../foods.json';

class Home extends Component {
  state = {
    foods: foods,
    search: '',
    showAddFood: true,
  };

  onChange = (ev) => {
    const { value, name } = ev.target;

    this.setState({ [name]: value });
  };

  onSubmitFood = (food) => {
    const { foods } = this.state;
    const newFood = { ...food };

    const newFoods = [newFood, ...foods];
    this.setState({ foods: newFoods });
  };

  handleFoodToRender = () => {
    const { foods, search } = this.state;

    if (search) {
      return foods.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return foods;
  };

  deleteFood = (name) => {
    this.setState((prevState) => ({
      foods: prevState.foods.filter((food) => food.name !== name),
    }));
  };

  render() {
    return (
      <div className="Home">
        <div>
          <h2>
            <strong>Add Food Entry</strong>
          </h2>
          <AddFoodForm onSubmitFood={this.onSubmitFood} />
        </div>

        <div className="searchInput">
          <h2>
            <strong>Search</strong>
          </h2>
          <FormControl text="Search" htmlFor="search">
            <Input
              name="search"
              id="search"
              type="search"
              placeholder="Search"
              value={this.state.search}
              onChange={this.onChange}
            />
          </FormControl>
        </div>

        <div>
          <h2>
            <strong>Food List</strong>
          </h2>
          <FoodList
            foods={this.handleFoodToRender()}
            deleteBtn={this.deleteFood}
          />
        </div>
      </div>
    );
  }
}

export default Home;
