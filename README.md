![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# React | IronNutrition

## Introduction

You just realized that since the beginning of the bootcamp, your diet is not healthy and it may have an impact on your health (and productivity), now and in the long term.

To take care of the food you eat, you decided to create a nutrition app that will track everything you eat!

![](https://media.giphy.com/media/fH0dyqpPJRvTbiF5rJ/giphy.gif)

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

### React-Bootstrap Installation

You've worked with Bootstrap in the past. Now we'll use it alongside React!

To use Bootstrap and React-Bootstrap in your app, you first need to install both packages from the command line:

```bash
$ npm install bootstrap react-bootstrap
```

Then, import the minified version of the Bootstrap stylesheets into your `index.js` file.

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

You are now ready to start working with React-Bootstrap components! Follow the package's [documentation](https://react-bootstrap.github.io/getting-started/introduction/).

### Import the data

Import the array of food items from the `foods.json` file.

```js
import foods from './foods.json';
```

### Iteration 1 | Create `FoodBox` component

Create a `FoodBox` component that takes at least `food` as a prop and displays a box with all the information about an ingredient.

You can use this HTML snippet to display properly the `FoodBox`:

```html
<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src="https://i.imgur.com/eTmWoAN.png" />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>Pizza</strong> <br />
          <small>400 cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" value="1" />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
```

![](https://i.imgur.com/bY9i5Rw.png)

### Iteration 2 | Display food

In your `App` component (your main component), display as many `FoodBox` as elements inside the variable `foods`.

![](https://i.imgur.com/3TVQJDO.png)

### Iteration 3 | Add new food

Create a button to add new foods.

When a user clicks the button, a form will appear with fields for a name, number of calories, and an image.

When the user clicks submit, the food will be added to the list.

The form should disappear when the user clicks the submit button.

### Iteration 4 | Implement search bar

Create a `Search` component to perform a search that updates the list of all meal.

![](https://i.imgur.com/XaOpAx8.png)

### Iteration 5 | Create add buttons

On your `FoodBox`, you have an input an "+" button. Use them so that when a user clicks on the button, it adds them on a list on the right called "_Today's foods_".

You will also need to display the total amount of calories at the bottom of the list as a recap.

![](https://media.giphy.com/media/fH0dyqpPJRvTbiF5rJ/giphy.gif)

If you don't remember how to create responsive columns with Bulma, you can check the [documentation](https://bulma.io/documentation/columns/basics/).

### Iteration 5 | Bonus | Group ingredients

You made an awesome application, but you have found a little problem in the UX. For example, if you click twice on "Pizza", it will display 2 lines "_1 Pizza = 400 cal_" instead of 1 line "_2 Pizza = 800 cal_". Fix that problem.

### Iteration 6 | Bonus | Allow the user to remove an ingredient

On the "_Today's food_", add a trash icon to let users removing one of their items.

Happy coding! 💙
