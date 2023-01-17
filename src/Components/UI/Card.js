import React from 'react'

const Card = (props) => {
  return (
    <div className='p-4 rounded-md m-8 bg-white shadow-inner w-auto'>{props.children}</div>
  )
}

export default Card