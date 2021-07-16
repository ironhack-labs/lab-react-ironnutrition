import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './App.css'
import foodArr from './foods.json'
import { TextField } from '@material-ui/core/'
import NewFoodcon from './component/Foodcontainer'
import { v4 as uuidv4 } from 'uuid'

//import <component> from '@material-ui/core/<component>';

const Array = foodArr.map((item) => {
  return { ...item, id: uuidv4() }
})

function App() {
  const [FoodArray, SetFoodArr] = useState(Array)
  const [search, setSearch] = useState('')
  const [filteredArr, setFilteredArr] = useState([])
  const [collection, setCollection] = useState([])
  const [sum, setSum] = useState(0)

  useEffect(() => {
    const newArr = FoodArray.filter((item) => {
      if (item.name.toLowerCase().indexOf(search.toLowerCase()) != -1) {
        return true
      }
    })

    setFilteredArr([...newArr])
  }, [search])

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const addHandler = (listItem) => {
    console.log(listItem)
    setCollection((prevState) => [
      ...prevState,
      {
        key: listItem.inputKey,
        count: listItem.count,
        name: listItem.name,
        calories: listItem.calories,
      },
    ])
  }

  useEffect(() => {
    if (collection.length === 0) {
      return
    } else {
      let sum = 0
      collection.map((item) => {
        sum += item.calories
      })
      setSum(sum)
    }
  }, [collection])

  return (
    <div className="App">
      <Container>
        <h1>IronNutrition</h1>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={search}
          onChange={onChange}
        />
        <ContentDiv>
          <OuterFoodCon>
            {filteredArr.map((food) => (
              <NewFoodcon
                key={food.id}
                inputKey={food.id}
                foodsArr={food}
                addHandler={addHandler}
              />
            ))}
          </OuterFoodCon>
          <OuterContainer>
            <div style={{ width: ' 60%', margin: ' 0 auto' }}>
              <h2>Today's foods</h2>
              <section>
                <ul>
                  {collection.map((eachItem) => {
                    const foodItem = FoodArray.filter((item) =>
                      item.id === eachItem.key ? item : null
                    )
                    const sum = foodItem.reduce((total, current) => {
                      total = +current.calories
                    })

                    return (
                      <ListItem key={eachItem.key}>
                        {Number(eachItem.count)} {foodItem[0].name} ={' '}
                        {foodItem[0].calories * Number(eachItem.count)} cal
                      </ListItem>
                    )
                  })}
                </ul>

                <p>
                  <strong>Total: {sum}Cal</strong>
                </p>
              </section>
            </div>
          </OuterContainer>
        </ContentDiv>
      </Container>
    </div>
  )
}

const ListItem = styled.li`
  text-align: left;
`

const Container = styled.div`
  margin: 0 auto;
  width: 65%;
`

const ContentDiv = styled.div`
  display: flex;
  margin-top: 1rem;
`

const OuterFoodCon = styled.div`
  display: block;
  flex: 1;
`

const OuterContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export default App
