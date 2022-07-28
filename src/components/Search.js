import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
    
    const [filter, setFilter] = useState("")

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={props.food.name} type="text" onChange={(e) => {setFilter(e.target.value)}} />
      
      <ul>
  {({props.food}).filter({food} => ({props.food.name}).includes(filter)).
  map({food} => {
    return 
  <li>{props.food}</li>
})
  }  </ul>
    </>
)}
export default Search;