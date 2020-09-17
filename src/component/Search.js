import React, {useState} from 'react'
import Main from '../styles/Main'
import foods from "../foods.json"
import Box from "../styles/Box"

function Search() {
  const [name, setName] = useState("")
  const [arr, setArr] = useState([]);
  const [calc, setCalc] = useState("")

  function searchFood(e){
    e.preventDefault();
    [...foods].forEach((ele, index)=>{
      if (ele.name === name){
        console.log(ele)
        setArr([...arr, ele])
        setName("")
      }
    })
  }



  return (
    <Main>
    <div>
      <form onSubmit={searchFood}>
        <h3 className="margin-bottom">Search</h3>
        <label for = "name"> Name of the Food : </label>
        <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)} />
        <button className="submitbtn">Search</button>
      </form>
      <div>
        {arr.map((ele, index, ar)=>{
          return (
            <Box key={index}>
              <div>
                <img src={ele.image}></img>
              </div>
              <div className="text">
                <h3>{ele.name}</h3>
                <p>{ele.calories} Cal</p>
              </div>
              <div className="input">
                <input min="0" type="number" name="calc"/>
              </div>
                <button className="btn">+</button>
              {}
            </Box>
          )
        })}
      </div>
    </div>
      
    </Main>
  )
}

export default Search
