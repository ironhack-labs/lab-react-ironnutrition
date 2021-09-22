import ButtonAdd from '../Button-Add/Button-Add'

function FoodItem({ oneDish, addTodaysFood }) {


    return (<div className="box columns">
        <article className="media column">
            <div className="media-left">
                <figure className="image is-64x64">
                    <img src={oneDish.image} />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{oneDish.name}</strong> <br />
                        <small>{oneDish.calories}</small>
                    </p>
                </div>
            </div>
            <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="number" value={oneDish.value} />
                    </div>
                    <div className="control">
                        <ButtonAdd addTodaysFood={addTodaysFood} />
                    </div>
                </div>
            </div>
        </article>
    </div>)
}

export default FoodItem