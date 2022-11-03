import { LoadingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
function FeedbackMessage({ getFoodBack }) {
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
          onClick={getFoodBack}
        >
          <LoadingOutlined
            style={{
              fontSize: '100px',
              marginBottom: '20px',
            }}
          />
          <h4>There is no more content to show</h4>
        </Card>
      </div>
    </>
  );
}
export default FeedbackMessage;
