import React, {useState} from 'react'

const UseState1 = () => {
  
  const [title, setTitle] = useState('hello react');
  console.log(5);

  return (
    <>
      <div>UseState1</div>
      <h2>{title}</h2>

      <button type='button' onClick={ () => {
        setTitle(10);
      }}>버튼</button>

    </>
  )
}

export default UseState1