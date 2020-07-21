import React, { useState } from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import FoodBoxes from './FoodBoxes';

function Search(props) {
  const { foods } = props;
  const initialState = {
    items: foods.items,
    list: [],
  };
  const [localFood, setLocalFood] = useState(initialState);
  const handleChange = (e) => {
    var newItems = localFood.items.filter((item) =>
      item.name.toLowerCase().includes(e.target.value)
    );
    setLocalFood((localFood) => ({
      ...localFood,
      list: newItems,
    }));
  };
  if (localFood.list.length !== 0) {
    return (
      <div>
        <Form>
          <FormGroup className="field">
            <Form.Label htmlFor="name">Search: </Form.Label>
            <FormControl
              className="control"
              type="text"
              name="name"
              onChange={handleChange}
              value={localFood.name}
            />
          </FormGroup>
        </Form>
        <FoodBoxes foods={localFood.list} setFood={setLocalFood} />
      </div>
    );
  } else {
    return (
      <div>
        <Form>
          <FormGroup className="field">
            <Form.Label htmlFor="name">Search: </Form.Label>
            <FormControl
              className="control"
              type="text"
              name="name"
              onChange={handleChange}
              value={localFood.name}
            />
          </FormGroup>
        </Form>
        <FoodBoxes foods={localFood.items} setFood={setLocalFood} />
      </div>
    );
  }
}

export default Search;
