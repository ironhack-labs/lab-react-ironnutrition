import _ from 'lodash';

export const formattedFood = (foodToAdd) => {
    const newFood = _.groupBy(foodToAdd, 'name');
    return _.keys(newFood).map((name) => ({
        name: name,
        quantity: _.sumBy(newFood[name], 'quantity'),
        calories: _.first(newFood[name])['calories'],
    }))
}