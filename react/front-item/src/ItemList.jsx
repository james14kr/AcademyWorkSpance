import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {

  const [list, setList] = useState([]);

  useEffect(() => {
    getItemList();
  }, []);

  const getItemList = () => {
    axios.get("http://localhost:8080/item")
      .then(response => {
        setList(response.data);
      })
      .catch(e => console.log(e));
  };

  return (
    <div className="container">
      <h2>상품 목록</h2>

      <table border="1">
        <thead>
          <tr>
            <th>상품번호</th>
            <th>상품명</th>
            <th>가격</th>
            <th>등록일</th>
          </tr>
        </thead>

        <tbody>
          {
            list.map(item => (
              <tr key={item.itemNum}>
                <td>{item.itemNum}</td>
                <td>{item.itemName}</td>
                <td>{item.itemPrice}</td>
                <td>{item.createDate}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
