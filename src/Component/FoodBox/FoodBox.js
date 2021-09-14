import React from "react";
import './FoodBox.css';


const arrayFoods=[
  {
      "name": "Pizza",
      "calories": 400,
      "image": "https://i.imgur.com/eTmWoAN.png",
      "quantity": 0
    },
    {
      "name": "Salad",
      "calories": 150,
      "image": "https://i.imgur.com/DupGBz5.jpg",
      "quantity": 0
    },
    {
      "name": "Sweet Potato",
      "calories": 120,
      "image": "https://i.imgur.com/hGraGyR.jpg",
      "quantity": 0
    },
    {
      "name": "Gnocchi",
      "calories": 500,
      "image": "https://i.imgur.com/93ekwW0.jpg",
      "quantity": 0
    },
    {
      "name": "Pot Roast",
      "calories": 350,
      "image": "https://i.imgur.com/WCzJDWz.jpg",
      "quantity": 0
    },
    {
      "name": "Lasagna",
      "calories": 750,
      "image": "https://i.imgur.com/ClxOafl.jpg",
      "quantity": 0
    },
    {
      "name": "Hamburger",
      "calories": 400,
      "image": "https://i.imgur.com/LoG39wK.jpg",
      "quantity": 0
    },
    {
      "name": "Pad Thai",
      "calories": 475,
      "image": "https://i.imgur.com/5ktcSzF.jpg",
      "quantity": 0
    },
    {
      "name": "Almonds",
      "calories": 75,
      "image": "https://i.imgur.com/JRp4Ksx.jpg",
      "quantity": 0
    },
    {
      "name": "Bacon",
      "calories": 175,
      "image": "https://i.imgur.com/7GlqDsG.jpg",
      "quantity": 0
    },
    {
      "name": "Hot Dog",
      "calories": 275,
      "image": "https://i.imgur.com/QqVHdRu.jpg",
      "quantity": 0
    },
    {
      "name": "Chocolate Cake",
      "calories": 490,
      "image": "https://i.imgur.com/yrgzA9x.jpg",
      "quantity": 0
    },
    {
      "name": "Wheat Bread",
      "calories": 175,
      "image": "https://i.imgur.com/TsWzMfM.jpg",
      "quantity": 0
    },
    {
      "name": "Orange",
      "calories": 85,
      "image": "https://i.imgur.com/abKGOcv.jpg",
      "quantity": 0
    },
    {
      "name": "Banana",
      "calories": 175,
      "image": "https://i.imgur.com/BMdJhu5.jpg",
      "quantity": 0
    },
    {
      "name": "Yogurt",
      "calories": 125,
      "image": "https://i.imgur.com/URhdrAm.png",
      "quantity": 0
    }
]

function FoodBox (props) {
 return(
        <div>
            {arrayFoods.map((elememtoAtual) => {  
              return (
                <div className="box">
                 <article className="media">
                   <div className="media-left">
                      <figure className="image is-64x64">
                       <img src={elememtoAtual.image} alt={elememtoAtual.name}/>
                      </figure>
                    </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{elememtoAtual.name}</strong> <br />
                      <small>{elememtoAtual.calories} cal </small>
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
)
})}
 
          
</div>
       
);
}

export default FoodBox