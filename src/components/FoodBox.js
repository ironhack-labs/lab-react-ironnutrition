import React, {useState} from 'react'
import 'bulma/css/bulma.css'
import foods  from "../foods.json"

function FoodBox(){
    let arrFoods = [...foods];
    const [arr, setFoods] = useState(arrFoods);
  
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [number, setNumber] = useState(1)
  
  
    function addNewItem(item){
      item.preventDefault();
      const newItem = {name, calories, image}
      setFoods([...arr, newItem])
      setName("")
      setImage("")
      setCalories(0);
    }


    return (

        <div className="box">
            
            <form onSubmit={addNewItem}>
            <h1>AGREGAR ALIMENTOS</h1> <br />
            
            <label for= "name">Nombre:</label>
            <input  type='text' name= 'name' value={name} onChange= {e=>setName(e.target.value)}></input>
            
            <label for="calories">Calorias : </label>
            <input type="number" name="calories" value={calories} onChange={e=>setCalories(e.target.value)} />

            <label for="name">Imagen : </label>
            <input type="text" name="image" value={image} onChange={e=>setImage(e.target.value)} />
            <button type="submit">Subir</button>
            </form>
            <br />

            <h1>TODOS LOS ALIMENTOS</h1> <br />
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://i.imgur.com/eTmWoAN.png"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p> <br />
                            <strong>Pizza</strong> <br />
                            <small>400 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://i.imgur.com/DupGBz5.jpg"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Salad</strong> <br />
                            <small>150 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://i.imgur.com/hGraGyR.jpg"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Sweet Potato</strong> <br />
                            <small>120 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://i.imgur.com/93ekwW0.jpg"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Gnocchi</strong> <br />
                            <small>350 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://i.imgur.com/WCzJDWz.jpg"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Pot Roast</strong> <br />
                            <small>350 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://i.imgur.com/ClxOafl.jpg"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Lasagna</strong> <br />
                            <small>750 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://i.imgur.com/LoG39wK.jpg"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Hamburger</strong> <br />
                            <small>400 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://i.imgur.com/5ktcSzF.jpg"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Pad Thai</strong> <br />
                            <small>475 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>

            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://i.imgur.com/5ktcSzF.jpg"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Almonds</strong> <br />
                            <small>75 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://i.imgur.com/7GlqDsG.jpg"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Bacon</strong> <br />
                            <small>175 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article><article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://i.imgur.com/QqVHdRu.jpg"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Hot Dog</strong> <br />
                            <small>275 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://i.imgur.com/yrgzA9x.jpg"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Chocolate Cake</strong> <br />
                            <small>490 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://i.imgur.com/TsWzMfM.jpg"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Wheat Bread</strong> <br />
                            <small>175 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://i.imgur.com/abKGOcv.jpg"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Orange</strong> <br />
                            <small>85 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://i.imgur.com/BMdJhu5.jpg"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Banana</strong> <br />
                            <small>175 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://i.imgur.com/URhdrAm.png"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Yogurt</strong> <br />
                            <small>125 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value="1" />
                            <button className="button is-info">+</button>
                        </div>
                    </div>
                </div>
            </article>
            <div>
                <h2 class="title">COMPRA</h2>
                    
                    <h4 class="subtitle is-4">Total:</h4>
            </div>

        </div>

    )
}
export default FoodBox
