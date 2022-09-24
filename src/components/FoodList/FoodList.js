function FoodList({ foods }) {
    console.log(foods)

  return (
    <div>
      {foods.map(({ name, image }, i) => (
        <div key={i}>
          <p>{name}</p>
          <img src={image} alt={name} />
        </div>
      ))}
    </div>
  );
}

export default FoodList;
