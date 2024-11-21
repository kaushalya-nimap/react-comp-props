import React from 'react'
import ComponentB from './ComponentB'
function ComponentA() {
    const data={
        name:'John',
        age:'29',
        occupation:'qwert'
    }
  return (
    <div>
        <h1>ComponentA</h1>
        <ComponentB userData={data}/>
    </div>
  )
}
export default ComponentA