import React, { useState, useEffect } from "react";
import foods from "../../foods.json";
import {
  ButtonFormFood,
  FormFoodContainer,
  FormFood,
  Close,
  Search,
  TodaysFood,
  ItemFoodTodayStyled
} from "../UI/Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FoodItem } from "./FoodItem";

const FoodBox = props => {
  const [totalCalories, setTotalCalories] = useState(0);
  const [todaysFoods, setTodaysFoods] = useState([]);
  const [allFoods, setAllFoods] = useState(foods);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState(false);
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
    form ? setForm(false) : setForm(true);
  };

  const handleSearch = (search, foods) => {
    console.log(foods);
    setSearch(search);
    var re = new RegExp(search);
    let newlist = allFoods.filter(food => {
      return food.name.match(re);
    });
    search === "" ? setAllFoods(foods) : setAllFoods(newlist);
  };

  const NewTodaysFood = (name, calories, quantity) => {
    if (quantity > 0) {
      let foodAlreadyAdded = todaysFoods.find(food => food.name === name);

      if (foodAlreadyAdded) {
        foodAlreadyAdded.quantity += quantity;
        foodAlreadyAdded.calories += quantity * calories;
      } else {
        setTodaysFoods([
          ...todaysFoods,
          { name, calories: calories * quantity, quantity }
        ]);
      }

      setTotalCalories(calories * quantity + totalCalories);
    }
  };

  const Delete = name => {
    let foodToDelete = todaysFoods.find(food => food.name === name);
    setTodaysFoods(todaysFoods.filter(food => food.name !== foodToDelete.name));
    setTotalCalories(totalCalories - foodToDelete.calories);
  };

  return (
    <>
      <ButtonFormFood
        className={form === true ? "hidden" : "show"}
        onClick={e => {
          e.preventDefault();
          handleForm(form);
        }}
      >
        Add New Food
      </ButtonFormFood>
      <FormFoodContainer className={form === true ? "show" : "hidden"}>
        <Close
          onClick={e => {
            e.preventDefault();
            handleForm(form);
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
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
              <input
                class="file-input"
                type="file"
                id="image"
                name="image"
                onChange={e => {
                  setImage(URL.createObjectURL(e.target.files[0]));
                  console.log(image);
                }}
              />

              <span class="file-cta">
                <span class="file-label">Choose an image…</span>
              </span>
            </label>
          </div>
          {image && <img className="image is300x300" src={image} alt="" />}

          <input
            style={{ marginTop: "10px" }}
            type="submit"
            id="submit"
            value="SAVE"
          />
        </FormFood>
      </FormFoodContainer>

      <div className="columns">
        <div className="column">
          <Search
            ype="text"
            value={search}
            placeholder="Search..."
            onChange={e => handleSearch(e.target.value, foods)}
          />
          {allFoods.map((food, i) => {
            return (
              <FoodItem
                name={food.name}
                calories={food.calories}
                image={food.image}
                handleNewTodaysFood={NewTodaysFood}
              ></FoodItem>
            );
          })}
        </div>
        <div className="column">
          <TodaysFood>
            <h2>Today's Food</h2>
            {todaysFoods.map(foodToday => {
              return (
                <ItemFoodTodayStyled>
                  <div>
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => Delete(foodToday.name)}
                    />
                  </div>
                  <div>
                    {foodToday.quantity} {foodToday.name} = {foodToday.calories}{" "}
                    cal
                  </div>
                </ItemFoodTodayStyled>
              );
            })}
            <p>
              Total calories: <b>{totalCalories}</b>
            </p>
          </TodaysFood>
        </div>
      </div>
    </>
  );
};

export default FoodBox;
