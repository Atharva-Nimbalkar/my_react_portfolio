import React from 'react'

export default function Edcard({title,where,from,to}) {
  return (
    <div className='ed-con edcard'>
        <div>
            <h3>{title}</h3>
            <h4 className='secondtext'>{where}</h4>
            <h4 className='secondtext'>{from}-{to}</h4>
        </div>
    </div>
  )
}
