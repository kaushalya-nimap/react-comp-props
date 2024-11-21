import React from 'react'

function ComponentB(props) {
const{name,age,occupation}=props.userData

  return (
    <div>
        <h3>ComponentB</h3>
        <p>Name: {name}</p>
        <p>Age:{age}</p>
        <p>Occupation:{occupation}</p>
    </div>
   
  )
}

export default ComponentB