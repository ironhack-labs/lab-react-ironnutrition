import { LoadingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { red } from '@ant-design/colors';
function FeedbackMessage() {
  return (
    <>
      <div
        style={{
          height: '50vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card
          hoverable
          title="Ooops"
          style={{ width: '30vw', textAlign: 'center' }}
        >
          <LoadingOutlined
            style={{
              fontSize: '100px',
              marginBottom: '20px',
            }}
          />
          <h3>There is no more content to show</h3>
        </Card>
      </div>
    </>
  );
}
export default FeedbackMessage;
