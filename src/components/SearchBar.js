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

        {props.queryState.query === "goku" && <p>goku is real!!!</p>}

      </form>

      
    </div>
  )
}

export default SearchBar;