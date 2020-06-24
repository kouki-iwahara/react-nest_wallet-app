import React from 'react'

type TProp = {
  text: string
  onClick: () => void
  className?: string
}

const Button: React.FC<TProp> = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
