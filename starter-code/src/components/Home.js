import React, {Component} from 'react';
import foods     from '../seeds/foods.json';
import FoodBox   from './FoodBox.js';
import Button    from './Button.js';
import AddFood   from './AddFood.js';
import SearchBar from './SearchBar.js';
import TodayFood from './TodayFood.js';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ogFoods:   foods,
      foods:     [],
      form:      {
        name: '',
        kcal: '',
        img:  '',
        qty:  0
      },
      query:     {
        search: ''
      },
      today:     [],
      selection: 1,
      totalKcal:   0
    }
  }

  componentWillMount() {
    let {ogFoods, selection} = this.state;
    selection = 1;
    this.setState({foods: ogFoods, selection});
  }
  componentDidMount() {}
  componentWillUnmount() {}

  handleAddFood = () => {
    document.querySelector('.modal').classList.add('is-active');
  }

  handleCloseModal = () => {
    document.querySelector('.modal').classList.remove('is-active');
  }

  handleChange = e => {
    let {form} = this.state,
        field  = e.target.name;
    form[field] = e.target.value;

    this.setState({form});
  }

  handleSubmit = e => {
    e.preventDefault();

    let {foods, form} = this.state;
    foods.unshift(form);
    form = {name:'', kcal:'', img:'', qty:0};
    document.querySelector('.modal').classList.remove('is-active');

    this.setState({foods, form});
  }

  handleSearch = e => {
    let {query, ogFoods} = this.state;
    query.search = e.target.value;

    let input    = new RegExp(`${query.search}`, 'i'),
        filtered = ogFoods;
    filtered = filtered.filter( item => input.test(item.name) ? item : null);

    this.setState({foods: filtered});
  }

  handleQtyChange = e => {
    let {selection} = this.state;
    selection = e.target.value;

    this.setState({selection});
  }

  handleAddToday = (e, item) => {
    e.preventDefault();
    
    let {selection, today, totalKcal} = this.state,
                      {...selected} = item;
    selected.qty = selection;
    today.push(selected);

    let kcals = today.map( item => item.kcal),
        qtys  = today.map( item => item.qty),
        sub   = kcals.map( (item, index) => item * qtys[index]);
    totalKcal = sub.reduce( (a,b) => a + b);

    this.setState({today, totalKcal});
  }

  handleRemoveToday = index => {
    let {today, totalKcal} = this.state;
    today = today.filter( (item, inx) => index !== inx);

    let kcals = today.map( item => item.kcal),
        qtys  = today.map( item => item.qty),
        sub   = kcals.map( (item, index) => item * qtys[index]);
    totalKcal = sub.length > 0 ? sub.reduce( (a,b) => a + b) : 0;

    this.setState({today, totalKcal});
  }

  render() {
    const {state} = this,
          {foods, today} = state;

    return (
      <main className="section">
        <div className="container">
          <section className="columns">
            <div className="column">
              <h1 className="title is-1">IronNutrition</h1>
              <div className="level">
                <div className="level-left"></div>
                <div className="level-right">
                  <Button 
                    className="level-item button is-small is-info is-rounded"
                    type="button"
                    onClick={this.handleAddFood}
                  >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </Button>
                  <AddFood
                    values={state.form}
                    handleCloseModal={this.handleCloseModal}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                  />
                </div>
              </div>
              <SearchBar onChange={this.handleSearch} />
            </div>
          </section>
          <section className="columns">
            <div className="column foods">
              {foods.map( (item, index) => {
                 return <FoodBox
                          key={index}
                          index={index}
                          food={item}
                          onChange={this.handleQtyChange}
                          onClick={this.handleAddToday}
                        />
              })}
            </div>
            <article className="column">
              <h2 className="subtitle is-2">Today's food</h2>
              <ul>
              {today.map( (item, index) => {
                 return <TodayFood
                          key={index}
                          index={index}
                          food={item}
                          onClick={this.handleRemoveToday}
                        />
              })}
              </ul>
              <p>Total: {state.totalKcal} kcal</p>
            </article>
          </section>
        </div>
      </main>
    );
  }
}

export default Home;