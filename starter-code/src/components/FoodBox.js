import React from 'react';

export const FoodBox = ({ food: { image, name, calories, quantity } }) => {   //en vez de ponerlo así ({ food }) => { y luego poner food.image, food.calores,... optimizamos

  return (

    < div className="box" >
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt="food" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={quantity}
              />
            </div>
            <div className="control">
              <button className="button is-info">
                +
            </button>
            </div>
          </div>
        </div>
      </article>
    </div >

  );
}

export default FoodBox;







    // this.state.foods.map((food, i) =>
// <Block key={i}>
//   <div className="box">
//     <Card style={{ width: '18rem' }}>
//       <Card.Img style={{ width: 60, height: 50 }} variant="top" src={food.image} />
//       <Card.Body>
//         <Card.Title>{food.name} {food.quantity}</Card.Title>
//         <Card.Text>{food.calories} calories</Card.Text>

//         <BtnFormat>
//           <Button style={{ marginRight: 5 }} variant="primary">+</Button>
//           <Button style={{ marginRight: 5 }} variant="primary">-</Button>
//           <Button type="submit" value="Submit" variant="primary">Add New</Button>{' '}
//         </BtnFormat>
//       </Card.Body>
//     </Card>
//   </div >
// </Block>
// )