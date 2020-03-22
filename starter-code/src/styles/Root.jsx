import styled from "styled-components";

const Root = styled.div`
  margin: 50px;
  .container {
    max-width: 900px;
    margin-top: 30px;
  }

  .search-bar {
    margin-bottom: 30px;
  }

  .box {
    padding: 0;
    max-width: 400px;
  }

  .box .media {
    -ms-flex-align: center;
    align-items: center;
  }

  .box img {
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .box input {
    width: 100px;
    text-align: center;
    border: 0px white;
    -webkit-box-shadow: inset 0 1px 2px white;
    box-shadow: inset 0 1px 2px white;
  }

  .box .button {
    width: 64px;
    font-size: 1.3em;
  }

  .box input,
  .box .button {
    height: 64px;
  }

  ul {
    margin-bottom: 10px;
  }
  .amount-input {
    user-select: none;
  }
`;

export default Root;
