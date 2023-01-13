import './App.css';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <Divider>Fancy Input</Divider>
          <Input value={'sss'} onChange={() => {}} />
        </Col>

        <Col>
          <Card title={'Fancy Card'}>
            <Button onClick={() => {}}>Fancy Button</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
