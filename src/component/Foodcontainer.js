import React from 'react'
import styled from 'styled-components'

function Foodcontainer({ foodsArr }) {
  return (
    <FoodContainer>
      <FoodImg>
        <ImageStyling src={foodsArr.image}></ImageStyling>
      </FoodImg>
      <FoodDescrip>
        {foodsArr.name}
        <br></br>
        {foodsArr.calories}
      </FoodDescrip>
      <FoodInput>
        <InputDiv type="number" value="1"></InputDiv>
        <AdditionSign>+</AdditionSign>
      </FoodInput>
    </FoodContainer>
  )
}

const InputDiv = styled.input`
  width: 50%;
  margin: 0;
  border: none;
  font-size: 1rem;
`

const AdditionSign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: #209cee;
  color: white;
  font-weight: 400;
`

const FoodDescrip = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
`

const FoodImg = styled.div`
  display: flex;
  width: 30%;
`

const FoodInput = styled.div`
  display: flex;
  position: relative;
  width: 40%;
  margin: 0;
`

const FoodContainer = styled.div`
  display: flex;
  height: 60px;
  margin: 0 1rem 1.2rem 0;
  border: 1px solid grey;
  border-radius: 4px;
  position: relative;
  box-shadow: -4px 4px 4px -5px rgba(0, 0, 0, 0.73);
`

const ImageStyling = styled.img`
  width: 5rem;
`

export default Foodcontainer
