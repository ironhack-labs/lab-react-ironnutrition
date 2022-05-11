import { useState } from 'react';

const Searchbar = (props) => {
  const [searchQuery, setSearchQuery] = useState('');


  console.log(searchQuery);

  const filteredFoods = props.foodArr.filter((food) => {
    return (food.name.toLowerCase().includes(searchQuery.toLowerCase()));
  });


  const handleChange = (e) => {
    setSearchQuery(e.target.value)
   
    props.setNewFoodArr(filteredFoods);
  }


  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Searchbar;
