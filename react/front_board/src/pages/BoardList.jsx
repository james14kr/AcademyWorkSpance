import React from 'react'
import styles from './BoardList.module.css'

const BoardList = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>자유 게시판</h1>
        <div className={styles.btnDiv}>
          <select className={styles.selectStyle}>
            <option value="">제목</option>
            <option value="">작성자</option>
          </select>
          <input className={styles.inputStyle} type="text" />
          <button className={styles.buttonStyle}type='button'>검색</button>
        </div>
        <div>
          <table border="1">
            <thead>
              <tr>
                <td>No</td>
                <td>제목</td>
                <td>작성자</td>
                <td>작성일</td>
                <td>조회수</td>
              </tr>
            </thead>
          </table>
        </div>
        <div></div>
      </div>

    </>
   
  )
}

export default BoardList