import foodsNoId from '../foods.json';

export function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (a) =>
    (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
  );
}
export const foods = foodsNoId.map((food) => {
  food.key = uuid();
  return food;
});
