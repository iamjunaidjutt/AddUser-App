import React from 'react'

const Card = (props) => {
  return (
    <div className={`p-4 rounded-md m-8 bg-white drop-shadow-xl w-auto ${props.className}`}>{props.children}</div>
  )
}

export default Card