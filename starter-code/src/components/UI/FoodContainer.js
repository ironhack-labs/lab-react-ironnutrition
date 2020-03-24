import styled from "styled-components";

export const FoodContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  text-align: left;

  .media-left {
    margin-right: 1rem;
    .image.is-64x64 {
      height: 64px;
      width: 64px;
      img {
        height: 100%;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        display: block;
        max-width: 100%;
        width: 100%;
      }
    }
  }

  .button {
    background-color: #209cee;
    border-color: transparent;
    color: #fff;
  }
  .media-content {
    flex-shrink: 1;
    overflow: auto;
    text-align: left;
    flex-grow: 1;
    flex-basis: auto;

    .content {
      display: block;
    }

    .media-right {
      margin-left: 1rem;
      flex-basis: auto;
      flex-grow: 0;
      flex-shrink: 0;

      .field {
        display: flex;
        justify-content: flex-start;

        .control {
          font-size: 1rem;
          position: relative;
          text-align: left;
          .input {
            align-items: center;
            border-radius: 3px;
            display: inline-flex;
            font-size: 1rem;
            justify-content: flex-start;
            line-height: 1.5;
            padding-bottom: calc(0.375em - 1px);
            padding-left: calc(0.625em - 1px);
            padding-right: calc(0.625em - 1px);
            padding-top: calc(0.375em - 1px);
            position: relative;
            vertical-align: top;
            background-color: #fff;
            color: #363636;
          }
          .box input {
            height: 64px;
            width: 100px;
            text-align: center;
            border: 0px white;
            -webkit-box-shadow: inset 0 1px 2px white;
            box-shadow: inset 0 1px 2px white;
          }
        }
      }
    }
  }
`;
