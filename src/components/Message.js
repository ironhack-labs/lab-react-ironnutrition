import React from 'react'

import { Alert } from 'antd'

const Message = () => {
  return (
    <div>
      <Alert message="No results for your search" type="info" showIcon style={{margin: 30}}/>
    </div>
  )
}

export default Message