import { FoodBox } from './FoodBox';

export const FoodList = ({ products, onDelete }) => {
  return (
    <>
      {products.map((product) => (
        <FoodBox key={product.id} food={product} onDelete={onDelete} />
      ))}
    </>
  );
};
