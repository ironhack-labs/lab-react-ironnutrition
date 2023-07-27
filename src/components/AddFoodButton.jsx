import { Button } from 'antd'
import AddFoodForm from './AddFoodForm'

function AddFoodButton(props) {
  const { addFood, toggleForm, showForm } = props

  return (
    <>
      {showForm ? <AddFoodForm addFood={addFood} /> : <></>}

      <Button type="dashed" onClick={() => toggleForm()}>
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>
    </>
  );
}

export default AddFoodButton