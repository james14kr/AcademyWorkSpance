import React from 'react'

//props 매개변수에 부모컴포넌트로부터 전달된 데이터를 확인 할 수 있음
const Child = (props) => {
  console.log(props)
  return (
    <div>Child</div>
  )
}

export default Child