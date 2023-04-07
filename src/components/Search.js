import { Divider, Input } from 'antd';
import foodsJson from '../foods.json';

function Search({ setFoods }) {
  const handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      setFoods((prev) => {
        return prev.filter((food) =>
          food.name.toLowerCase().includes(value.toLowerCase())
        );
      });
    } else {
      setFoods(foodsJson);
    }
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input type="text" placeholder="Search..." onChange={handleChange} />
    </>
  );
}

export default Search;
