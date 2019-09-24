import React from 'react';
import foods from '../foods.json'

class FoodBox extends React.Component{
constructor(props){
    super(props);
    this.state = {
        foodList: foods
      }

}
    displayAllFood = () => {
        return this.state.foodList.map((eachFood, index)=>{
            return (
                <div key={index} className="box">
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src={eachFood.image} alt="theFood" width="150px"/>
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>{eachFood.name}</strong> <br />
                          <small>{eachFood.calories}</small>
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


         // return  <FoodBox id={index} name={eachFood.name} image={eachFood.image} calories={eachFood.calories}/>
        })
      }
    

    render(){
        return(
       <div>
           {this.displayAllFood()}
       </div>
       )
    }
}

export default FoodBox;