import { useState } from 'react';
import { Collapse, Form, Input } from 'antd';
const { Panel } = Collapse;

export default function SearchField({ setQuery }) {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleSearch = (e) => setQuery(e.target.value);

  return (
    <Collapse
      defaultActiveKey={1}
      accordion
      bordered={false}
      style={{ width: 520, backgroundColor: '#fff' }}
    >
      <Panel header="Find food" key={2}>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 0,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          <Form.Item label="Search:" name="search">
            <Input placeholder="Food name" onChange={handleSearch} />
          </Form.Item>
        </Form>
      </Panel>
    </Collapse>
  );
}
