import React, { useState } from 'react'
import Title from './Title'
import Display from './Display'
import Controller from './Controller'

const Test6 = () => {

  const[data, setData] = useState(0);

  return (
    <>
      <Title/>
      <Display data = {data}/>
      <Controller setData = {setData} data = {data}/>
    </>
  )
}

export default Test6