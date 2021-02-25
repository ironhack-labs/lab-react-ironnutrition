import React from 'react';
import foods from './foods.json'

class FoodBox extends React.Component{
state={
    name:"...",
    calories:"...", 
    image:'...',
    foods: foods,
    show: true
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}


handleSubmit = (e) => {
    e.preventDefault();
    console.log('new food')
    console.log(this.state)
    let copyFoods = [...this.state.foods];
    let newFood = copyFoods.unshift({
        name: this.state.name,
        calories: this.state.calories,
        image: this.state.image
      
    })
    this.setState({
        foods: newFood
    })
}

search = (e) => {
  e.preventDefault();
  console.log('search')
  let copyFoods = [...this.state.foods];
  let filterFood = copyFoods.filter(food => food.name.toLowerCase().includes(this.state.name))
  console.log()
  
  this.setState({
      foods: filterFood
  })

}

toggleForm = () => {
  this.setState({ show: !this.state.show})
}



addFood =(i)=>{
  console.log('add food');
  let copyFoods = [...this.state.foods];
  let newFood = copyFoods.splice(i,1);

  this.setState({
    foods: newFood
  })

}

showFood = () => {
    return this.state.foods.map((eachFood, i) => {
        return (
            <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={eachFood.image} alt={eachFood.name}/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{eachFood.name}</strong> <br />
                    <small>{eachFood.calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" min="1" />
                  </div>
                  <div className="control">
                    <button className="button is-info"  onClick={this.addFood}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )
    })
}



    render (){
        return (
            <>

          <form onSubmit={this.search}>

         <input type="text" name="name" placeholder="name" onChange={this.handleChange}/>

          <button>Search</button>
         </form>


{this.state.show && (

            <form onSubmit={this.handleSubmit}>
        
              <input type="text" name="name" placeholder="name" onChange={this.handleChange}/>

              <input min='1' type="number" name="calories" placeholder="calories" onChange={this.handleChange}/>

              <input type="image" name="image" placeholder="image" onChange={this.handleChange}/>

              <button>Add Food</button>
          </form>
)}
      
         <button onClick={this.toggleForm} >Toggle Form</button>

          <ul>

                    {this.showFood()}
      
        </ul>







</>
        )
    }
}

export default FoodBox;