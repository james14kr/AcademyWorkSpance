import React, { useEffect, useState } from 'react'
import styles from './BoardList.module.css'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const BoardList = () => {

  //조회한 게시글 목록 데이터를 저장할 state변수
  const[list, setList] = useState([]);

  //입력한 검색 내용을 저장할 state변수 
  const[searchData, setSearchData] = useState({
    searchKeyword : 'TITLE',
    searchValue : ''
  });

  //입력값 저장할 함수
  const handleSearchData = (e) =>{
    setSearchData({
      ...searchData,
      [e.target.name] : e.target.value
    })
  }

  const nav = useNavigate();

  useEffect(() => {
    getBoardlist();
  }, []);

  //검색 버튼 실행 함수
  const getBoardlist = () => {
    axios.get('http://localhost:8080/boards', {params : searchData})
    .then(response => { //response : 통신 성공에 대한 모든 정보를 담고 있음, 응답에 대한 모든 정보
      // console.log(response.data)
      setList(response.data)
      // console.log(response);
    })
    .catch(e => {
      console.log("오류발생!!")
      console.log(e);
    });
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.search_div}> 
          <select
            value={searchData.searchKeyword}
            name="searchKeyword"
            onChange={handleSearchData}
          >
            <option value="TITLE">제목</option>
            <option value="WRITER">작성자</option>
          </select>

          <input
            type="text"
            value={searchData.searchValue}
            name="searchValue"
            onChange={handleSearchData}
          />

          <button type="button" onClick={getBoardlist}>검색</button>
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
                    <td>{board.boardNum}</td>
                    <td>
                      <span  onClick={e => {nav(`/detail/${board.boardNum}`)}}>
                        {board.title}
                      </span>
                    </td>
                    <td>{board.writer}</td>
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