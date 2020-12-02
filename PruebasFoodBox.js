// import React from 'react'


// const FoodBox = (props) => {

//     const onInputChange = (_event) => {
//         props.updateFoods(_event.target.name, _event.target.value)
//     }

//     const changeDisplay = () => {
//         props.changeDisplay()
//     }

//     const newArr = []

//     const addTodayFood = (foodAdd) => {
//         newArr.push(foodAdd)
//         // console.log(newArr)
//     }

//     return (
//         <div className="FoodBox container">
//             <button onClick={() => changeDisplay()}>Add new food</button>
//             <div style={{ display: props.display }}>
//                 <h2>New food</h2>
//                 <form onSubmit={props.addNewFood}>
//                     <label htmlFor="name">Name: </label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={props.temporalNewFood.name}
//                         onChange={(event) => onInputChange(event)}
//                         placeholder="Introduce una comida" />
//                     <label htmlFor="animal">Calories: </label>
//                     <input
//                         type="text"
//                         name="calories"
//                         value={props.temporalNewFood.calories}
//                         onChange={(event) => onInputChange(event)}
//                         placeholder="Introduce las calorias" />
//                     <label htmlFor="image">Image url: </label>
//                     <input
//                         type="text"
//                         name="image"
//                         value={props.temporalNewFood.image}
//                         onChange={(event) => onInputChange(event)}
//                         placeholder="url" />
//                     <button type="submit">Crear comida</button>
//                 </form>
//             </div>
//             <div>
//             <h1>Today's foods</h1>
//             {newArr.map((foodAdd)=>{
//                         return (
//                             <ul>
//                                 <li>{foodAdd.name}</li>
//                             </ul>
//                         )
//                     })}
//             </div>
//             {props.foods.map((food) => {
//                 return (
//                     <div className="box" key={food.name}>
//                         <article className="media">
//                             <div className="media-left">
//                                 <figure className="image is-64x64">
//                                     <img src={food.image} alt={food.name} />
//                                 </figure>
//                             </div>
//                             <div className="media-content">
//                                 <div className="content">
//                                     <p>
//                                         <strong>{food.name}</strong> <br />
//                                         <small>{food.calories}</small>
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="media-right">
//                                 <div className="field has-addons">
//                                     <div className="control">
//                                         <input className="input" type="number" value="1" />
//                                     </div>
//                                     <div className="control">
//                                         <button 
//                                         onClick={() => addTodayFood(food)} 
//                                         className="button is-info" >
//                                             +
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </article>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }
// export default FoodBox