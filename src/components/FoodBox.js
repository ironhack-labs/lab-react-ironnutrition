import { Typography, Image, Space, Button, Card } from 'antd';

const { Paragraph, Title, Text } = Typography;

export default function FoodBox({  name, image, calories, servings, handleDelete }) {
  return (
    <Space>
      <Card
        hoverable
        title={name}
        cover={
          <Image src={image} alt={name} style={{ objectFit: 'contain' }} />
        }
      >
        
        <Paragraph>
          <Text>Calories: {calories}</Text>
        </Paragraph>
        <Paragraph>
          <Text>
            Servings: <strong>{servings}</strong>
          </Text>
        </Paragraph>
        <Paragraph>
          <Text>
            <strong>Total Calories: {calories * servings}</strong> kcal
          </Text>
        </Paragraph>
        <Space>
          <Button type="dashed" onClick={() => handleDelete(name)}>Delete</Button>
        </Space>
      </Card>
    </Space>
  );
}
