import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BoardDetail from '../pages/BoardDetail'
import BoardList from '../pages/BoardList'

const ReplyInfo = ({boardNum}) => {

  //댓글 목록 조회 데이터를 저장할 state변수
  const[replyList, setReplyList] = useState([])

  //마운트 시 댓글 목록 조회
  useEffect(() => {
    axios.get(`http://localhost:8080/replies/${boardNum}`)
    .then(response => {
      console.log(response.data);
      setReplyList(response.data);
    })
    .catch(e => console.log(e))
  }, [])

  return (
    <div style={{marginTop:'20px'}}>
      <div style={{display : 'flex', gap:'10px'}}>
        <input style={{width :'20%'}} type="text" />
        <input style={{width : '70%'}} type="text" />
        <button style={{width : '10%'}} type='button'>댓글등록</button>
      </div>
      <div style={{marginTop : '16px'}}>
        {
          replyList.map((reply, i) => {
            return(
              <div key={i}>
                <div style={{display : 'flex', alignItems : 'center', gap : '8px'}}>
                  <img style={{border : '1px solid lightgray',
                    width : '50px',
                    height : '50px',
                    borderRadius : '50%'
                  }} src="/face-03.jpg" />
                  <div>
                    <p>{reply.writer}</p>
                    <p style={{color : 'gray'}}>{reply.regDate}</p>
                  </div>
                </div>
                <div style={{display: 'flex', justifyContent : 'space-between', marginTop : '5px'}}>
                  <p>{reply.content}</p>
                  <button type='button'>삭제</button>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default ReplyInfo