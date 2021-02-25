import React, {useState} from 'react'

export default function Search(props) {
    const handleChange = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        const filterFood = props.searchFood.filter((e) => {
          return e.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        console.log(filterFood);
        props.setSearchFood([...filterFood]);
      };
      return (
        <div>
          <input
            name="calories"
            onChange={(e) => {
              handleChange(e);
            }}
            value={props.calories}
          />
        </div>
      );
    }
