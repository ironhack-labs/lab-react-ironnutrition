import React from "react";
import foods from "../foods.json"
import _ from "lodash"

const example = _.sample(foods);

export const AddNewFoodPage = () => (
    <form onSubmit={e => { e.preventDefault(); }}>
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder={`e.g ${example.name}`} />
            </div>
        </div>

        <div class="field">
            <label class="label">Calories</label>
            <div class="control">
                <input class="input" type="number" placeholder={example.calories} />
            </div>
        </div>

        <div class="field">
            <label class="label">Image link</label>
            <div class="control">
                <input class="input" type="text" placeholder={`e.g ${example.image}`} />
            </div>
        </div>

        <div class="control">
            <button class="button is-info">Submit</button>
        </div>

    </form>)