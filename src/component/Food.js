function Food (props) {
    return (
    <div>
      <p> {props.name}</p>
      <img src={props.image} width={100} alt=""/>
    </div>
    )
}

export default Food;