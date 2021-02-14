

export function FoodBox(props) {

  return (
    <div className="box">
            <div className="media" key="">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={props.image} alt="food" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{props.name}</strong> <br />
                  <small>{props.calories} Kcal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value={props.quantity} />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}
