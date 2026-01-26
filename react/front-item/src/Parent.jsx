import React from 'react'
import Child from './Child'

//props를 이용해 컴포넌트간 데이터를 전달하는 것은
//부모 컴포넌트에서 자식컴포넌트로만 가능
const Parent = () => {
  const num = 10;
  return (
    <>
      <h2>Parent 컴포넌트</h2>
      <Child myDate = {num}/>
    </>
  )
}

export default Parent