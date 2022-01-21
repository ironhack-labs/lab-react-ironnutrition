import React from 'react';

const FoodBox = (props) => {
  // btnAddFood -> comes from App.js 
  // when onClick on the button, the <TodayFood/> component is added in App.js
  const { food, btnAddFood } = props;

  // set state for the calories input
  const [ number, setNumber ] = React.useState(0);//initial value of number

  const [onFocusNumber, setOnFocusNumber ] = React.useState("");

  // set 0 afterblur
  //const [ numberOnBlur, setnumberOnBlur ] = React.useState(0)
  
  // onChange -> every time the number changes we update the setNumber
  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNumber(event.target.value) // set the new state
  }

  // empty the input when onFocus
  const handleOnFocus = (event) => {
    console.log(event.target.value)
    event.target.value = onFocusNumber; // it's not a good practice
    setOnFocusNumber(onFocusNumber);
  }

  return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
            <img src={food.image} alt="food"/>
            </figure>
          </div>
          <div className="media-content">
              <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories} cal</small>
              </p>
              </div>
          </div>
          <div className="media-right">
              <div className="field has-addons">
              <div className="control">
                <input 
                  className="input" 
                  type="number" 
                  placeholder='Number of items'
                  // value=0
                  onFocus={handleOnFocus}
                  onChange={handleInputChange} 
                />
              </div>
              <div className="control">
              <button onClick={()=> {btnAddFood(number, food)}} className="button is-info">
                +
                </button>
              </div>
              </div>
          </div>
          </article>
        </div>
    ) 
}

export default FoodBox;