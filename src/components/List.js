import { FoodBox } from './Foodbox';

export function List({ foodsList, handleClickDelete }) {
  if (foodsList.length === 0) {
    return (
      <>
        <h2>Oops. There is no more content to show</h2>
        <p className="nullSymbol">&#x2205;</p>
      </>
    );
  }
  const listItems = foodsList.map((elem) => {
    return (
      <li key={elem.name} id={elem.name}>
        <FoodBox food={elem} handleClickDelete={handleClickDelete} />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}
