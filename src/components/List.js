import { FoodBox } from "./Foodbox";

export function List({ foodsList }) {
  const listItems = foodsList.map((elem) => {
    return (
      <li key={elem.name}>
        <FoodBox food={elem} />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}
