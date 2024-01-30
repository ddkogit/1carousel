import React from 'react'

function Image({link}) {
  return (
    <div className='img'>
        <img src={link} alt="image slider" className='photo'/>
    </div>
  )
}

export default Image