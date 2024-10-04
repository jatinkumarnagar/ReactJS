import React from 'react'

const ClockContainer = (props) => {
  return (
    <div className='border mx-auto mt-5 shadow bg-body-color border-black p-5 w-50'>
      {props.children}
    </div>
  )
}

export default ClockContainer
