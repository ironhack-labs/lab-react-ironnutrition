import foodies from '../foods.json';

let foods = foodies;

export const list = () => Promise.resolve([...foods]);

export const remove = (id) => {
    return new Promise((resolve) => {
        foods = foods.filter((food) => food.id !== id);    
        resolve();
    }); 
};

export const create = (food) => {
    return new Promise((resolve) => {
        const foodCreate = {
            ...food,
            id: crypto.randomUUID().toString()
        };

        foods.push(foodCreate);
        resolve();
    });
};

export const searchFood = ({ searchFood }) => {
    return new Promise((resolve) => {
        if (!searchFood) {
            return;
        }

        const foodSearch = foods.filter((food) => food.name.toLowerCase().includes(searchFood.toLowerCase()));
        resolve(foodSearch);
    });
};