import React from 'react'

const Display = (props) => {
  return (
    <div style={{
      backgroundColor : 'lightgray',
      padding : '12px',
      margin : '10px 0px',

    }}>
      <p>현재 카운트 : </p>
      <h3>{props.data}
      </h3>
    </div>
  )
}

export default Display