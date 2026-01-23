import React, { useState } from 'react';
import axios from 'axios';
import './ItemForm.css';

const ItemForm = () => {

  const [data, setData] = useState({
    itemName: "",
    itemPrice: "",
    itemDescription: ""
  });

  const changeData = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    });
  };

  const insertItem = () => {
    axios.post("http://localhost:8080/item", data)
      .then(response => {
        alert("등록 성공");
        setData({
          itemName: "",
          itemPrice: "",
          itemDescription: ""
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="container">
      <h2>상품 등록</h2>

      <div className="row">
        <div>상품명</div>
        <input 
          type="text" 
          name="itemName" 
          value={data.itemName} 
          onChange={changeData} 
        />
      </div>

      <div className="row">
        <div>가격</div>
        <input 
          type="text" 
          name="itemPrice" 
          value={data.itemPrice} 
          onChange={changeData} 
        />
      </div>

      <div className="row">
        <div>상품소개</div>
        <textarea 
          name="itemDescription" 
          value={data.itemDescription} 
          onChange={changeData}
        />
      </div>

      <button onClick={insertItem}>등록</button>
    </div>
  );
};

export default ItemForm;
