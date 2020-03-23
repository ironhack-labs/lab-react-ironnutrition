import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 900px;
  margin: 30px auto 0;
  padding: 0 10px;
  width: 100%;
  h1 {
    font-size: 40px;
  }
`;

export const Contain = styled.div`
  display: flex;
  justify-content: space-between;
  .box {
    width: 30%;
    &.box-item-list {
      width: 60%;
    }
  }
`;
