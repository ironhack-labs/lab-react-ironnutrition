
function SearchBar(props) {
    const{query,setQuery}= props
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <label htmlFor='search' style={{textAlign:'left', fontSize:'18px', fontWeight:'bold'}}>Search:</label>
      <input style={{padding:'4px', borderColor:'lightgrey', margin:'10px 0px'}}name='name' type='text' onChange={(e)=>{setFoodName(e.target.value)}} type='text' value={query} onChange={(e)=>setQuery(e.target.value)}/>
    </div>
  )
}

export default SearchBar;
