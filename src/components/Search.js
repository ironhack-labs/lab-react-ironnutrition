export default function Search(props) {
  
    const handleOnChange = (e) => {
    filter(e.target.value);
  };

  const filter = (query) => {
    const filteredArr = props.foodList.filter((food) => {
      return food.name.toLowerCase().includes(query.toLowerCase());
    });
    props.setFood(filteredArr);
  };
  
  return (
    <div>
      <input placeholder="Enter Search Here" onChange={handleOnChange} />
    </div>
  );
}
