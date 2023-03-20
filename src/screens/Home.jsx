import foods from '../foods.json';
import noContent from '../images/sadFace.png';
import { Component } from 'react';
import Button from '../components/Button/Button';
import FoodList from '../components/FoodList/FoodList';
import AddFoodForm from '../components/Form/AddFoodForm/AddFoodForm';
import FormControl from '../components/Form/FormComponents/FormControl';
import Input from '../components/Form/FormComponents/Input';

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

  toggleShowAddFoodForm = () => {
    this.setState((prevState) => {
      return {
        showAddFood: !prevState.showAddFood,
      };
    });
  };

  render() {
    const { search, showAddFood, foods } = this.state;

    return (
      <div className="Home">
        <div>
          {showAddFood ? (
            <div>
              <h2>
                <strong>Add Food Entry</strong>
              </h2>
              <AddFoodForm onSubmitFood={this.onSubmitFood} />
            </div>
          ) : null}

          <Button
            color="light"
            onClick={this.toggleShowAddFoodForm}
            text={showAddFood ? 'Hide Form' : 'Add New Food'}
          />
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
              value={search}
              onChange={this.onChange}
            />
          </FormControl>
        </div>

        <div>
          <h2>
            <strong>Food List</strong>
          </h2>
          {foods.length > 0 ? (
            <FoodList
              foods={this.handleFoodToRender()}
              deleteBtn={this.deleteFood}
            />
          ) : (
            <div className="noContent">
              <h5>
                <strong>Oops! There is no more content to show.</strong>
              </h5>
              <img
                src={noContent}
                alt="no content"
                style={{ width: '200px' }}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
