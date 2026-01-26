import axios from "axios";
import React, { useState } from "react";

const ItemForm = () => {

  const [item, setItem] = useState({
    itemName: "",
    itemPrice: "",
    itemIntro: ""
  });

  const handleItemData = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    });
  }

  console.log(item);

  const regItem = () => {
    axios.post("http://localhost:8080/item", item)
      .then(response => {
        alert("등록 성공");
      })
      .catch((e) => {
        console.log(e);
        alert("등록 실패");
      });
  };

  return (
    <div>
      <h2>상품 등록</h2>

      <div>
        상품명 : 
        <input 
          type="text" 
          name="itemName"
          value={item.itemName}
          onChange={e => handleItemData(e)}
        />
      </div>

      <div>
        가격 : 
        <input 
          type="number" 
          name="itemPrice"
          value={item.itemPrice}
          onChange={e => handleItemData(e)}
        />
      </div>

      <div>
        상품소개
        <textarea 
          cols={50}
          rows={5}
          name="itemIntro"
          value={item.itemIntro}
          onChange={e => handleItemData(e)}>

          </textarea>
      </div>

      <button type="button" onClick={e => regItem(e)}>등록</button>
    </div>
  );
};

export default ItemForm;
