import styled from "styled-components";

export const FormBox = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  left: 0;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: fixed;
  top: 0;
  transform: scale(0.5);
  transition: all 2000 ease;
  width: 100vw;
  z-index: -1;
  &.active {
    transform: scale(1);
    opacity: 1;
    transition: all 2000 ease;
    z-index: 10;
  }
  form {
    background-color: #fff;
    border-radius: 20px;
    border: 1px solid #9e9e9e;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    padding: 40px;
    width: 100%;
    font-size: 18px;
    label {
      margin-bottom: 7px;
      font-weight: 700;
      width: 100%;
    }
    input {
      margin-bottom: 20px;
      width: 100%;
    }
    button {
      margin-top: 10px;
      max-width: 150px;
      align-self: flex-end;
      font-size: 18px;
      color: #fff;
      border-radius: 10px;
      line-height: 1;
      padding: 10px 15px;
      cursor: pointer;
      background: #0bb3e7;
      &:hover {
        background-color: #499db7;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

export const ButtonLighbox = styled.button`
  display: block;
  position: absolute;
  max-width: 150px;
  top: 0;
  right: 5px;
  font-size: 18px;
  color: #fff;
  border-radius: 10px;
  line-height: 1;
  cursor: pointer;
  background: #0bb3e7;
  padding: 10px 20px;
  top: 6px;
  &:hover {
    background-color: #499db7;
  }
  &:focus {
    outline: none;
  }
  &.active {
    z-index: 11;
  }
`;
