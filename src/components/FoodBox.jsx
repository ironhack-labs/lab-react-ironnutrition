// Your code here
function Foodbox(props) {
    return (
        <section className="food-section">
            {props.foodList.map((item) => {
                return (
                    <div key={item.id} className="food-item">
                        <h2>Name: {item.name}</h2>
                        <img src={item.image} />
                        <h3>Calories: {item.calories}</h3>
                        <h3>Servings: {item.servings}</h3>
                        <strong>Total calories: {item.servings * item.calories}</strong>
                        <br />
                        <button className="delete-btn" onClick={() => { props.deleteFood(item.id) }}>Delete</button>

                    </div>

                )
            })};
        </section>
    )
}

export default Foodbox;





