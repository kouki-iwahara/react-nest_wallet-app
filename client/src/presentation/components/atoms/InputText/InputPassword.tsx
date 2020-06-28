import React from 'react'

type TProp = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputPassword: React.FC<TProp> = ({ value, onChange }) => {
  return <input type="password" value={value} onChange={onChange} />
}

export default InputPassword
