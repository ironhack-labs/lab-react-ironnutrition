import React, {useContext} from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import {FoodContext} from './../contexts/FoodContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledButton = styled.button({
  marginLeft: '20px'
});
const StyledLi = styled.li({
  marginTop: '20px'
});
const Total = styled.p({
  fontWeight: 'bold',
  fontSize: '1.2em',
  marginTop: '20px'
})


const TodaysFoods = () => {
  const {todaysFoods, totalCalories, deleteToday} = useContext(FoodContext);

  return(
    <Container>
      <Heading size={5} renderAs="p">Today's Foods</Heading>
      <ul>
        {
          todaysFoods.map(food => {
            return <StyledLi>{food.quantity} {food.name} = {food.mealCal} kcal 
                          <StyledButton className="button is-danger" onClick={() => deleteToday(food.name, food.mealCal)}>
                            <FontAwesomeIcon icon={faTrash} />
                          </StyledButton>
                    </StyledLi>
          })
        }
      </ul>
      <Total>Total: {totalCalories} cal</Total>
    </Container>
  );
}

export default TodaysFoods;