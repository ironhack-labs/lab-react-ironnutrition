import React, { useState, useEffect } from "react";
import foods from "../../foods.json";
import { ButtonFormFood, FormFoodContainer, FormFood, Close, Search } from '../UI/Styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const FoodBox = () => {
  const [allFoods, setAllFoods] = useState(foods)
  const [search, setSearch] = useState("");
  const [form, setForm] = useState(false)
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");

  const handleNewFood = (newName, newCalories, newImage) => {
    foods.push({
      name: newName,
      calories: newCalories,
      image: newImage,
      quantity: 0
    });
    handleClear();
    handleForm();
    return foods;
  };

  const handleClear = () => {
    setName("");
    setCalories("");
    setImage("");
  };

  const handleForm = () => {
    form ? setForm(false) : setForm(true)
  }

  const handleSearch = (search, foods) => {
    console.log(foods)
    setSearch(search);
    var re = new RegExp(search); 
    let newlist = allFoods.filter(food => {
      return food.name.match(re)
    })
    search === "" ? setAllFoods(foods) : setAllFoods(newlist)
  }

  return (
    <>
      <ButtonFormFood className={form === true ? "hidden" : "show"} onClick={e => {
        e.preventDefault();
        handleForm(form)
      }}>
        Add New Food
      </ButtonFormFood>
      <FormFoodContainer className={form === true ? "show" : "hidden"}>
        <Close onClick={e => {
        e.preventDefault();
        handleForm(form)
      }}>
        <FontAwesomeIcon icon={faTimes}/>
        </Close>
        <FormFood
          onSubmit={e => {
            e.preventDefault();
            handleNewFood(name, calories, image);
          }}
        >
          <h2>Add New</h2>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Name"
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            id="calories"
            name="calories"
            value={calories}
            placeholder="Calories"
            onChange={e => setCalories(e.target.value)}
          />

          <div class="file">
            <label class="file-label">
            <input  class="file-input" type="file" id="image"
                      name="image"
                      onChange={e => {
                        setImage(URL.createObjectURL(e.target.files[0]));
                        console.log(image)
                      }}/>
                     
              <span class="file-cta">
                <span class="file-label">
                  Choose an image…
                </span>
              </span>
            </label>
          </div>
          {image && <img className="image is300x300" src={image} alt=""/>}


          <input style={{marginTop: '10px'}} type="submit" id="submit" value="SAVE" />
        </FormFood>
      </FormFoodContainer>
      
      <div className="columns">
        <div className="column">
        <Search ype="text" value={search} placeholder="Search..." onChange={e => handleSearch(e.target.value, foods)} />
          {allFoods.map(food => {
            return (
              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={food.image} />
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
                        <input className="input" type="number" value="1" />
                      </div>
                      <div className="control">
                        <button className="button is-info">+</button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
        <div className="column">
          <p>hola</p>
        </div>
      </div>
    </>
  );
};

export default FoodBox;
