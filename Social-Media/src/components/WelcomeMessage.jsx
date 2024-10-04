import React from 'react'

const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className='mt-5'>
      <h1>There are no Posts...</h1>
      <button type="button" className='btn btn-primary mt-4' onClick={onGetPostsClick}>Get Posts from Server</button>
      <p>Sorry due to some reason, This button is not working...</p>
    </center>
  )
}

export default WelcomeMessage
