import foods from '../foods.json';

function FoodList() {
  
  return (
    <div>
      {foods.map((eachElement) => {
        console.log(eachElement)
        return (
          <div>
            <p> {eachElement.name} </p>
            <img src={eachElement.image} width={'150px'} />
          </div>
        )
      })}
    </div>
  );
}

export default FoodList;
