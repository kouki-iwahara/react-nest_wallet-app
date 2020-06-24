import React from 'react'

type TProp = {
  value: string
  onChange: () => void
}

const InputEmail: React.FC<TProp> = ({ value, onChange }) => {
  return <input type="email" defaultValue={value} onChange={onChange} />
}

export default InputEmail
