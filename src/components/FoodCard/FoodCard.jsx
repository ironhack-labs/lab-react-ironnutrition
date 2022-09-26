import { Divider, List, Typography } from 'antd';
import { Card } from 'antd';
import { DeleteFilled } from '@ant-design/icons'; // iconos de ant design -> ver en https://ant.design/components/icon

function FoodCard ({ title, img, calories, servings, onDelete }) {

    const data = [
      `Calories: ${calories}`,
      `Servings: ${servings}`,
      `TOTAL CALORIES: ${calories * servings} kcal`,
    ];

    return (
      <Card
        title={title}
        width={100}
        cover={<img src={img} height={260} alt="food" />}
        actions={[<DeleteFilled onClick={onDelete}/>]}
      >
        <Divider orientation="left"></Divider>
        <List
          dataSource={data}
          renderItem={(item) =>
            data.indexOf(item) !== 2 ? (
              <List.Item>
                <Typography.Text>{item}</Typography.Text>
              </List.Item>
            ) : (
              <List.Item>
                <Typography.Text>
                  <strong>{item}</strong>
                </Typography.Text>
              </List.Item>
            )
          }
        />
      </Card>
    );
}

export default FoodCard;