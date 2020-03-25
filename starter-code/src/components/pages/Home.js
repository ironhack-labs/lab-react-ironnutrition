import React from "react";
import "bulma/css/bulma.css";
import FoodBox from "../UI/FoodBox";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1300px;
  margin: 20px auto;
`;

const Home = () => {
  return (
    <Container>
      <FoodBox></FoodBox>
    </Container>
  );
};

export default Home;
