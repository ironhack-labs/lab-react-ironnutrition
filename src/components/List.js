import { FoodBox } from "./Foodbox";

export function List({ foodsList, handleClickDelete }) {
  const listItems = foodsList.map((elem) => {
    return (
      <li key={elem.name} id={elem.name}>
        <FoodBox food={elem} handleClickDelete={handleClickDelete} />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}
