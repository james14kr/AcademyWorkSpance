import React from 'react'

const UpdateFrom = () => {

  

  return (
    <div>
      <h2>상품 수정</h2>

      <div>
        상품번호
        <input type="number" name="itemNum"/>
      </div>

      <div>
        상품명
        <input type="text" name='itemName' />
      </div>

      <div>
        가격
        <input type="number" name='itemPrice'/>
      </div>

      <div>
        <button type='button'>수정</button>
      </div>

    </div>
  )
}

export default UpdateFrom