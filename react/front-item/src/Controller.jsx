import React from 'react'
import Test6 from './Test6'

const Controller = (props) => {

  return (
    <div style={{
      backgroundColor : 'lightgray',
      padding : '12px',
      margin : '10px 0px',

    }}>
      <button type='button' onClick={e => {props.setData(props.data-10)}}>-10</button>
      <button type='button'onClick={e => {props.setData(props.data - 100)}}>-100</button>
      <button type='button'onClick={e => {props.setData(props.data + 100)}}>+100</button>
      <button type='button'onClick={e => {props.setData(props.data + 10)}}>+10</button>
    </div>
  )
}

export default Controller