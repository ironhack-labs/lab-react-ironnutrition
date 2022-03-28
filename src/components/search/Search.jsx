import { Component } from 'react';

const initialState = {
  value: '',
};

class Search extends Component {
  state = { ...initialState };

  onSubmit = (event) => {
    event.preventDefault();
  };

  

  getFoodBySearchFilter = () => {
    const { foods, search } = this.state;

    return foods.filter((food) => {
      if (food.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });
  };

  resetForm = () => {
    this.setState({ ...initialState });
  };
  onHandleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value, // no recuerdo exactamente por qué los []
    });
  };

  render() {
    const { search } = this.state;
  

    return (
      <div>
        <form>
          <input
            htmlFor="search"
            className="mt-3 ml-4 input is-success is-normal is-rounded"
            type="text"
            name="search"
            id="search"
            placeholder="What are you looking for?"
            value={search}
            onChange={this.onHandleChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default Search;
