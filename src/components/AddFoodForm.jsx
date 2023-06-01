import { Input } from 'antd'
import React from 'react'

function AddFoodForm() {
  return (
    <div>
        <form className='input' style={{ width: '800px' }}>
        <Input value={"name"} type="text" onChange={''} />
        <Input value={"image"} type="text" onChange={''} />
        <Input value={"calories"} type="text" onChange={''} />
        <Input value={"servings"} type="text" onChange={''} />
        <button type="submit"> Create </button>
        </form>
    </div>
  )
}

export default AddFoodForm