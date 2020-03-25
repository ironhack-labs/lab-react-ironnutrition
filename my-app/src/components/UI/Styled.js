import React from "react";
import styled from "styled-components";

export const ButtonFormFood = styled.div`
position: fixed;
right: 0px;
top: 50px;
background-color: #209cee;
color: #fff;
padding: 20px;
cursor: pointer;

&:hover {
  background-color: #168bda;
}
`

export const FormFoodContainer = styled.div`
background-color: #eeeeee;
position: fixed;
right: 0px;
top: 0px;
height: 100vh;
width: 100vw;
z-index: 10;
-webkit-box-shadow: -3px 0 20px 1px #616161;
box-shadow: -3px 0 20px 1px #616161;
padding-top: 50px;

@media (min-width: 400px) {
  width: 400px;
}
`;

export const FormFood = styled.form`
max-width: 350px;
margin: auto;
input {
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  height: 50px;
  border: 1px solid #dedede;
  margin-bottom: 10px;
  font-size: 18px;
  padding-left: 10px;

  &::placeholder {
    color: #ababab;
  }
}

input#submit {
  background-color: #209cee;
  color: #fff;
  cursor: pointer;
}

input#submit:hover {
  background-color: #168bda;
}

h2 {
  font-size: 30px;
  margin-bottom: 10px;
}
`;

export const Close = styled.div`
position: fixed;
right: 20px;
top: 20px;
width: 30px;
height: 30px;
cursor: pointer;
`

export const Search = styled.input`
width: 100%;
padding-left: 20px;
margin: 20px 0px;
background-color: #fff;
border-radius: 5px;
height: 30px;
border: 1px solid #DEDEDE;
font-size: 16px;
&::placeholder {
    color: #CDCDCD;
}
`