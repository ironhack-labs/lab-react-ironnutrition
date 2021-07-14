

const Foods = (props) => {

    return (
        props.foodsCopy.map((food, index) => {
            return (

                <div className="box" key={index}>
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={food.image} alt="food screen" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{food.name}</strong> <br />
                                    <small>{food.calories} cal</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input" type="number" defaultValue="1" />
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
        })
    )

}

export default Foods;
