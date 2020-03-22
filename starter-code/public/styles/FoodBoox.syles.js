import styled from "styled-components";

export const ArticlesItem = styled.article`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .media-left {
    width: 33%;
    figure {
      margin: 0;
      padding: 0;
      width: 100%;
      img {
        display: block;
        max-width: 95%;
        width: 100%;
      }
    }
  }
  .media-content {
    width: 33%;
    p {
      font-size: 18px;
      line-height: 22px;
      strong {
        display: block;
        margin-bottom: 5px;
      }
    }
  }
  .media-right {
    align-items: center;
    display: flex;
    height: 100%;
    vertical-align: center;
    width: 33%;

    .control {
      width: 50%;
      height: 100%;
      input {
        max-width: 90%;
        width: 100%;
        text-align: center;
        border: 0px white;
        -webkit-box-shadow: inset 0 1px 2px white;
        box-shadow: inset 0 1px 2px white;
      }
      button {
        background-color: #0bb3e7;
        color: #fff;
        font-size: 1.5em;
        height: 55px;
        max-width: 100%;
        width: 55px;
        cursor: pointer;
      }
    }
  }
`;
