import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'

const foodCopy = foods;

//SEARCH COMPONENT

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    let {name, calories, image, error} = this.state;
    return <input type="text" value={name} onChange={(e) => this.props.onSearch(this.props.list, e.target.value)} />

  }
}

//FORM COMPONENT

export class FormComp extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      calories: '',
      image: '',
      quantity: 1,
      error: ''
    }
  }

  handleSubmit(){
    let { name, calories, image, error} = this.state;
    if(name === '') return this.setState({error:'Empty name'});
    if(calories === '') return this.setState({error:'Empty calories'});
    if(image === '') return this.setState({error:'Empty image'});

    console.log("FORM OK");
    this.setState({error: '', name:'', calories:'', image:''});
    this.props.addfood({name, calories, image});
}

  render() {
      let {name, calories, image, error} = this.state;
        return (
          <div>
            <p style={{color:"red"}}>{error}</p>
            <div className="field">
              <label>Name</label>
              <div className="control">
                <input type="text" value={name} onChange={(e) => this.setState({ name: e.target.value })} />
              </div>
            </div>

            <div className="field">
              <label>Calories</label>
              <div className="control">
                <input type="text" value={calories} onChange={(e) => this.setState({ calories: e.target.value })} />
              </div>
            </div>

            <div className="field">
              <label>Image</label>
              <div className="control">
                <input type="text" value={image} onChange={(e) => this.setState({ image: e.target.value })} />
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link" onClick={this.handleSubmit.bind(this)}>Submit</button>
              </div>
            </div>
          </div>
        )
  }
}

//FOODBOX COMPONENT

export class FoodBox extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return(
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value="1"
                />
              </div>
              <div className="control">
                <button className="button is-info">
                  +
          </button>
              </div>
            </div>
          </div>
        </article>
      </div>


    )
  }

}
//COMPONENT APP

class App extends Component {
  constructor(){
    super();
    
    this.state = {showForm:false,
                  foods: foodCopy}
    //this.showform = false;
  }

  showForm = () => {
    if(!this.state.showForm){
      this.setState({showForm: true});

    } else {this.setState({showForm: false});}
    console.log("STATE", this.state.showForm)
  }

  addFood = (food) => {
    console.log("ENTRA ADDFOOD", food)
    
    this.state.foods.push(food);
    this.setState({foods:this.state.foods, showForm: false});
}

filterFoods = (list, search) =>{
  console.log(list)
  console.log(search)
  let filtered = list.filter(food => {
    return food.name.includes(search)
  })
  console.log(filtered)
}

  
  render() {
    let list= this.state.foods
    return (
      <div className="Main">
      <button className="button is-success" onClick={()=> this.showForm()}>Add New Food</button>
      { this.state.showForm && <FormComp addfood={this.addFood}/> }
      <div className="List">
      <SearchBar onSearch={this.filterFoods} list={list}/>
      { }
      { this.state.foods.map((e,i) => 
      <FoodBox idx={i} image={e.image} name={e.name} calories={e.calories} />)
      }
      </div>
      </div>

    );
  }
}

export default App;
