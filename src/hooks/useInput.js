import {useState} from 'react'

export default function useInput(initialState) {
  const [value, setValue] = useState(initialState)

  //we take the value from the event target
  const onChange = ({ target: { value: inputVal } }) => {
    setValue(inputVal)
  }

  return {value, onChange}
} 