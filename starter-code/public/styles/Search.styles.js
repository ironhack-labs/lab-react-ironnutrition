import styled from "styled-components";

export const SearchBox = styled.div`
  display: block;
  width: 100%;
  input {
    box-sizing: border-box;
    color: #969696;
    font-size: 16px;
    margin-bottom: 20px;
    padding: 7px 10px;
    transition: all ease 1000ms;
    width: 57%;
    &:focus {
      transition: all ease 1000ms;
      color: #000;
      outline: none;
      width: 100%;
    }
  }
`;
