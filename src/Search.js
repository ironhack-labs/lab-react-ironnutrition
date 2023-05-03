function Search(props){
  return(
    <input value={props.searchStr} type="text" placeholder="Search food" onChange={props.searchFood}/>
  )
}
export default Search