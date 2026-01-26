import axios from 'axios';
import React, { useState } from 'react'

const UpdateFrom = () => {

  const[data, setData] = useState({
    itemNum : "",
    itemName : "",
    itemPrice : ""
});

  const changeInfo = (e => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  })

  const updateItem = () =>{
    axios.put(`http://localhost:8080/item/${data.itemNum}`, data)
    .then(response => alert('정보 수정 성공'))
    .catch(e => console.log(e));
  }


  return (
    <div>
      <h2>상품 수정</h2>

      <div>
        상품번호
        <input type="number"
          name="itemNum" 
          value={data.itemNum} 
          onChange={e => changeInfo(e)}/>
      </div>

      <div>
        상품명
        <input type="text" name='itemName' value={data.itemName} onChange={e => changeInfo(e)}/>
      </div>

      <div>
        가격
        <input type="number" name='itemPrice'value={data.itemPrice} onChange={e => changeInfo(e)}/>
      </div>

      <div>
        <button type='button' onClick={e => updateItem(e)}>수정</button>
      </div>

    </div>
  )
}

export default UpdateFrom