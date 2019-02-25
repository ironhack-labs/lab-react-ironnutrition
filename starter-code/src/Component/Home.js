import foods from "../foods"
import React, {Component} from "react";
import FoodBox from "./FoodBox";
import AddFood from "./AddFood";
import Form from "./Form";
import SearchBar from "./SearchBar";
import TodayFoods from "./TodayFoods";

class Home extends Component {

    state={
      foods,
      data:foods,
      form:
       { name:"",
        calories:"",
        img:""},
      quanty:"",
      showingForm:false,
      today:false,
      totalCalories:0,
      todayFoods:[]
    }

  newForm= (e) => {
    let {showingForm} = this.state;
    showingForm= !showingForm;
    this.setState({showingForm});
}


  handleChange = (e) => {
    let {form} = this.state;
    let field= e.target.name;
    form[field]=e.target.value;
    this.setState({form})
  };

  search= (e) => {
    let {word,data} =this.state;
    word = e.target.value;
    data=foods.filter(data => data.name.toLowerCase().includes(word.toLowerCase()));
      console.log(data ,'resi')
    this.setState({word,data})
  };

  addQuanty = (e) =>{
    let {quanty}= this.state;
    quanty=e.target.value;
    this.setState({quanty});
  };

  handleSubmit = (e) => {
     let {form,data}= this.state;
    data.unshift(form)
    console.log(foods)
    form = {name:"",calories:"",image: ""};
     this.setState({form,data,showingForm: false})
  };

  todayFood =(food) => {
    let {today,todayFoods,totalCalories,quanty} = this.state;

    if(quanty===''){
     return console.log('no existe quan')
    }
    food['quantity']=quanty
    totalCalories+=parseInt(food['calories']*quanty)
    todayFoods.push(food)
    console.log(todayFoods,'todayFoods')
    quanty=0;
    today=true;
    this.setState({today,todayFoods,totalCalories,quanty})


  }

  render() {
    let {form,showingForm,today,totalCalories,todayFoods} = this.state;
    return (
      <div className="App container is-fluid">
        <div className="columns">
          <div className="column">
          <p className="title is-1">IronNutrition</p>
            <SearchBar
              search={this.search}
            />
          </div>
        </div>
        <div className="columns">

          <div className="column is-half">
          {
            this.state.data.map((el, i ) =>
              < FoodBox
                food={el}
                key= {i}
                addQuanty={this.addQuanty}
                todayFood={this.todayFood}
              />)
          }
          </div>
          <div className="column notification   ">
            <AddFood
              onClick={this.newForm}

            />
           { showingForm ?
            <Form
              form={form}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />: " "}
          </div>
          <div className=" notification   ">
            {
              today ?
                <div>
                  <TodayFoods
                    totalCalories={totalCalories}
                    arrtodayFoods={todayFoods}
                  />
                </div>
                : " "
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
