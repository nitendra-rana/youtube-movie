import React from 'react'

const Navbar = () => {

  const handleClick1 = () => alert("I am a good in JS and React")
  const handleClick2 = () => alert("Click on the posters below")
  return (
    <div className='nav'>
      
      <button onClick={handleClick1}><span>About us</span></button>
      <button onClick={handleClick2}><span>Player</span></button>
    </div>
  )
}

export default Navbar
