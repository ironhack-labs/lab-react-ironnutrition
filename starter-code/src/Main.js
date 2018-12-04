import React, { Component } from 'react';
import foods from './foods.json'


class Main extends Component {

state = {
        foodList: foods,
        formName: '',
        formCalories: '',
        formImage: '',
        formQuantity: '',
    }

    handleChangeName = (e) => { 
        this.setState({ 
            formName: e.target.value
        })
    }

    handleChangeCalories = (e) => { 
        this.setState({ 
            formCalories: e.target.value
        })
    }

    handleChangeImage = (e) => { 
        this.setState({ 
            formImage: e.target.value
        })
    }

    handleChangeQuantity = (e) => { 
        this.setState({ 
            formQuantity: e.target.value
        })
    }

    addRandomFood = (e) => { 
        e.preventDefault() 
        const foodCopy = [...this.state.foodList] 
        foodCopy.push( 
            {name: this.state.formName,
             calories: this.state.formCalories,
             image: this.state.formImage,
             quantity: this.state.formQuantity, },
        )
        this.setState({ 
            foodList:foodCopy,
        })

    }

    searchForFood = (e) => { 
        e.preventDefault() 
        var theFoodSearched = this.state.foodList.filter((foodObj) => {
            return (
                foodObj.name.toUpperCase() === this.state.formName.toUpperCase()
            )
        })
            
            

            this.setState({
                foodList:theFoodSearched,
        })
     }


render() {
    const listItems = this.state.foodList.map((theFood, index) => { 
    return (
        
        <div className="box" key={index}>

            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img alt="food" src={theFood.image} />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{theFood.name}</strong> <br />
                    <small>{theFood.calories}</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input
                        className="input"
                        type="number" 
                        defaultValue={theFood.quantity}

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
})

return (
<div className="theFoodClass">   
    <br></br>

        <form onSubmit={this.searchForFood}>
            <label>Search by Name:<input onChange={(e) => this.handleChangeName(e)} type="text"/></label>
            <button type="submit">Search</button> 
        </form>

    <br></br>

        <form onSubmit={this.addRandomFood}>
            <label>Name:<input onChange={(e) => this.handleChangeName(e)} type="text"/></label>
            <label>Calories:<input onChange={(e) => this.handleChangeCalories(e)} type="text"/></label>
            <label>Image URL:<input onChange={(e) => this.handleChangeImage(e)} type="text"/></label>
            <label>Quantity:<input onChange={(e) => this.handleChangeQuantity(e)} type="text"/></label>
            <button type="submit">Create New Food</button> 
        </form>
    <br></br>
    {listItems}

</div>   
      );
    }
  }
  





  export default Main;