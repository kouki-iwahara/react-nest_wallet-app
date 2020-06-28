import React from 'react'

type TProp = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText: React.FC<TProp> = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />
}

export default InputText
