import React, { useEffect } from 'react'
import styles from './BoardList.module.css'
import axios from 'axios';

const BoardList = () => {

  const[list, setList] = useState();

  useEffect(() => {
    getList();
  }, []);

  const getList = (e => {
    axios.get('https://localhost:8080/boards')
    .then(response => {
      console.log(data)
      setList(response.data)
    })
    .catch(e => console.log)
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
                list.map(list => (
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className={styles.btn_div}>
          <button type='button'>글쓰기</button>
        </div>
      </div>

    </>
   
  )
}

export default BoardList