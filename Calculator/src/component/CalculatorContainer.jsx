import React from 'react'

const CalculatorContainer = (props) => {
  return (
    <div className='my-auto border border-2 border-black p-3 container mt-5 d-flex justify-content-center shadow'>
      {props.children}
    </div>
  )
}

export default CalculatorContainer
