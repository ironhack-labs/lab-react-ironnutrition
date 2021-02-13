import foods from '../../foods.json';
import '../../App.css';
import 'bulma/css/bulma.css';

export function FoodBox() {

  return (
    <div className="box">
      {
        foods.map(function (i) {
            return  (     
            <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={i.image} alt="food" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{i.name}</strong> <br />
                  <small>{i.calories} Kcal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value="1" />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </div>
            )
          })
      }
    </div>
  );
}
