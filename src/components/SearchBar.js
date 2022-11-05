import React from 'react'
import { useState } from 'react';


function SearchBar(props) {
 //using useState react hook
//  const [state, setstate] = useState({
//   query: '',
//   list: []
// })
//onchange handler
const handleChange = (e) => {
  const results = props.foods.filter(food => {
      if (e.target.value === "") {return food.name}
    else {
      return food.name.toLowerCase().includes(e.target.value.toLowerCase())
    }
  })
  props.setState({
      query: e.target.value,
      list: results
  })
}



  return (
    <div className='searchBar'>
 
 <form>
        searchbar
        <input type="search" value={props.queryState.query} onChange={handleChange} />

       
      <div>
    
        {/* {( props.queryState.query === "" ? props.products.map(product => {
          return <span key={product.name}>{product.name} {product.price}<br/></span>
        }): props.queryState.list.map(product => {
          return <span key={product.name}>{product.name} {product.price}<br/></span>
        }))} */}
      </div>

        {console.log({STATE: props.queryState.query})}
        {console.log({CHECKINGLISt: props.queryState.list})}
        {/* props.queryState.list holds the results of the search query. if there are not result the array will be zero; if its zero then you can desplay a mesage */}
        {props.queryState.list.length === 0  && <h1> ^_^; Sorry No Results for That Search</h1>}

      </form>

      
    </div>
  )
}

export default SearchBar;