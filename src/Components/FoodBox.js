import React, {useState} from 'react';

function FoodBox(props) {
    const { name, calories, image, quantity} = props;
    const [value, setValue] = useState(quantity);
    const [todayFood, setTodayFood] = props.todayFood;
  
    function handleChange(e) {
      setValue(e.currentTarget.value);
    }
  
    function handleClick(e) {
      let index = todayFood.map(el=>el.name).indexOf(name);
      if(index >= 0){
        let food = {
          name: name,
          calories: calories,
          image: image,
          quantity: Number(value)+Number(todayFood[index].quantity),
        }
        let newArray = [...todayFood];
        newArray.splice(index,1,food);
        setTodayFood([...newArray]);
  
      }else{
          setTodayFood([
            ...todayFood,
            {
              name: name,
              calories: calories,
              quantity: value,
              image: image
            },
          ]);
      }
    }
  
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt={name}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  onChange={handleChange}
                  value={value}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={handleClick}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
  
  export default FoodBox;