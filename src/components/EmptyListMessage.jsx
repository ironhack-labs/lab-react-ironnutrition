import { Card } from 'antd';
import styled from 'styled-components';

function EmptyListMessage() {
  return (
    <Wrapper>
      <Card className="emptyMessage" style={{ width: 500, height: 300 }}>
        <h1>Oops! There is no more content to show!</h1>
        <p>
          <i className="fa-solid fa-eye-slash"></i>
        </p>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .emptyMessage {
    margin: 0 auto;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    margin-bottom: 100px;
  }
  p {
    display: flex;
    justify-content: center;
  }
  i {
    font-size: 70px;
    align-self: center;
  }
`;

export default EmptyListMessage;
