import React, { useEffect, useState } from 'react'
import styles from './BoardList.module.css'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const BoardList = () => {

  const[list, setList] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    getList();
  }, []);

  const getList = (e => {
    axios.get('http://localhost:8080/boards')
    .then(response => {
      console.log(response.data)
      setList(response.data)
    })
    .catch(e => console.log(e))
  })

  return (
    <>
      <div className={styles.container}>
        <div className={styles.search_div}>
          <select>
            <option>제목</option>
            <option>작성자</option>
          </select>
          <input type="text" />
          <button type='button'>검색</button>
        </div>
        <div className={styles.list_div}>
          <table className={styles.list_table}>
            {/* 테이블의 각 컬럼 너비값 지정 */}
            <colgroup>
              <col width='10%'/>
              <col width='*'/>
              <col width='15%'/>
              <col width='18%'/>
              <col width='10%'/>
            </colgroup>
            <thead>
              <tr>
                <td>No</td>
                <td>제목</td>
                <td>작성자</td>
                <td>작성일</td>
                <td>조회수</td>
              </tr>
            </thead>
            <tbody>
              {
                list.map((board, i) => (
                  <tr key={board.boardNum}>
                    <td>{board.title} </td>
                    <td>
                      <span  onClick={e => {nav(`/detail/${board.boardNum}`)}}>
                        {board.writer}
                      </span>
                      </td>
                    <td>{board.createDate}</td>
                    <td>{board.readCnt}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className={styles.btn_div}>
          <button type='button' onClick={e => {nav('/reg')}}>글쓰기</button>
        </div>
      </div>

    </>
   
  )
}

export default BoardList