import { Button } from 'antd'
import AddFoodForm from './AddFoodForm'

function AddFoodButton(props) {
  const { addFood, toggleForm, showForm } = props

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {showForm ? <AddFoodForm addFood={addFood} /> : <></>}

      <Button type="dashed" onClick={() => toggleForm()}>
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>
    </div>
  );
}

export default AddFoodButton