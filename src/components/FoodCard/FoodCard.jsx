import { Card } from 'antd'
import { DeleteFilled } from '@ant-design/icons'; // iconos de ant design -> ver en https://ant.design/components/icon

const { Meta } = Card;

function FoodCard ({name, image, calories, servings, onDelete}) {
  return (
    <Card style={{ width: 250 }} 
    title= <h2>{name}</h2>
    cover={ <img alt="dishImg" src={image}/>}
    actions={[
      <DeleteFilled  onClick={onDelete}/>,
    ]}
  >
    <Meta
       description=
        <div>
          <h3>calories: {calories}</h3>
          <h3>Servings: <strong>{servings}</strong></h3>
          <h3><strong>Total calories: {calories}</strong> kcal</h3>
        </div>
    />
  </Card>
    // <div>
    //   <img src={image} alt="dishImg"/>
    // </div>
  )
}

export default FoodCard