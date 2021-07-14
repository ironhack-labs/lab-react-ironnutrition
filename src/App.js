import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './App.css'
import foodArr from './foods.json'
import { TextField } from '@material-ui/core/'
import NewFoodcon from './component/Foodcontainer'

//import <component> from '@material-ui/core/<component>';

function App() {
  const [FoodArray, SetFoodArr] = useState(foodArr)
  const [search, setSearch] = useState('')
  const [filteredArr, setFilteredArr] = useState(FoodArray)

  useEffect(() => {
    const newArr = foodArr.filter((item) => {
      if (item.name.toLowerCase().indexOf(search.toLowerCase()) != -1) {
        return true
      }
    })
    setFilteredArr([...newArr])
  }, [search])


  const onChange = (e) => {
    setSearch(e.target.value)
  }

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
              <NewFoodcon key={food.id} foodsArr={food} />
            ))}
          </OuterFoodCon>
          <OuterContainer>
            <div style={{ width: ' 60%', margin: ' 0 auto' }}>
              <h2>Today's foods</h2>
              <section>
                <ul>
                  <ListItem>1 Pizza = 400 cal</ListItem>
                  <ListItem>2 Salad = 300 cal</ListItem>
                </ul>

                <p>
                  <strong>Total: 700Cal</strong>
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
  width: 50%;
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
