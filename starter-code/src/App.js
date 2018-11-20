import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';
import TodaysFoods from './components/TodaysFoods';

class App extends Component {

  constructor() {
    super();

    this.state = {
      showForm: false,
      form: {
        name: "",
        calories: "",
        quantity: 0
      },
      data: foods,
      search: ""
    }
  }

  formChange = (e) => {
    let { form } = this.state;
    let field = e.target.name;

    if (field === "calories") {
      form[field] = parseInt(e.target.value);
    } else {
      form[field] = e.target.value;
    }

    this.setState({ form });
  };

  formSubmit = (e) => {
    let { form, data, showForm } = this.state;
    e.preventDefault();

    if (!showForm) {
      showForm = !showForm;
      return this.setState({ showForm });
    }

    showForm = !showForm;

    data.push(form);

    form = { name: "", calories: "" };
    this.setState({ form, data, showForm });
  };

  searchChange = (e) => {
    let { search } = this.state;
    search = e.target.value.toLowerCase();

    this.setState({ search });
  }

  addFood = (e, index) => {
    let { data } = this.state;

    data[index].quantity += parseInt(e.target.parentNode.parentNode.firstChild.firstChild.value);

    this.setState({ data });
  }

  deleteFood = (index) => {
    let { data } = this.state;
    data[index].quantity = 0;
    
    this.setState({ data });
  };

  render() {
    const { data, form, showForm, search } = this.state;
    return (
      <div>
        <h1>IronNutrition</h1>
        <Search searchChange={this.searchChange} search={search} />

        <div className="columns">
          <div className="column is-half">
            {data
              .filter(i => i.name.toLowerCase().includes(search)) // To lowercase as includes() is case sensitive
              .map((food, index) => <FoodBox
                food={food}
                key={index}
                index={index}
                addFood={this.addFood} />)}
          </div>

          <div className="column">
            <h2>Today's foods</h2>
            <TodaysFoods
              deleteFood={this.deleteFood}
              data={data} />

            <Form
              data={form}
              showForm={showForm}
              formSubmit={this.formSubmit}
              formChange={this.formChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;