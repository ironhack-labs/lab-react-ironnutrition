function FoodBox(props) {


    return (
        props.foodInfo.map((e, index) => {
            return (
                <div key={index}>

                    <p id="foodName">{e.name}</p>

                    <img src={e.image} height={300} width={300} />

                    <p>Calories: {e.calories}</p>
                    <p>Servings: {e.servings}</p>

                    <p>
                        <b>Total Calories: {e.calories * e.servings} </b> kcal
                    </p>

                    <button onClick={() => { props.callBackToDelete(e.id) }}>Delete</button>
                </div>

            )

        })

    )
}

export default FoodBox;