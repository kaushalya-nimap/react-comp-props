import React from 'react'

function EventHandling() {
    const handleClick = (message) => {
        console.log(message);
      };


  return (
    <div>
        <button onClick={()=>handleClick('Hello from button')}>Click ME</button>
    </div>
  )
}

export default EventHandling