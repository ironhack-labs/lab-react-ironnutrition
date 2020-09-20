import React, {useState} from 'react'
import Main from '../styles/Main'
import foods from "../foods.json"
import Box from "../styles/Box"



function Search() {
  const [name, setName] = useState("")
  const [arr, setArr] = useState([]);

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

  const [calc, setCalc] = useState([])

  function caluclateCalories(index){
    const quantity = document.querySelector("#quantity").value
    let calo = arr[index].calories * quantity
    setCalc(calo)
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
            <div>
              <Box key={index}>
                <div>
                  <img src={ele.image}></img>
                </div>
                <div className="text">
                  <h3>{ele.name}</h3>
                  <p>{ele.calories} Cal</p>
                </div>
                <div className="input">
                  <input min="0" type="number" name="calc" id="quantity"/>
                </div>
                  <button className="btn"  onClick={()=>{caluclateCalories(index)}}>+</button>
              </Box>
                  {calc>0 ? (
                    <div>
                      <p>Calories of {ele.name} : {calc} Cal</p>
                    </div>
                  ):
                  (
                    null
                  )
                  }
            </div>
          )
        })}
      </div>
    </div>
      
    </Main>
  )
}

export default Search
