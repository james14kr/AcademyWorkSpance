import React, { useState } from 'react'

const Usestate2 = () => {

  const[member, setMember] = useState({
    name : 'kim',
    age : 20,
    addr : '서울시'
  })

  return (
    <div>
      <div>
        이름 : {member.name} <br />
        나이 : {member.age} <br />
        주소 : {member.addr} <br />
      </div>
      
      <button 
        type='button'
        onClick={e => {
          // setMember({
          //   ...member,
          //   name : 'lee'
          // });

          //함수형 업데이트 사용 방식
          setMember(prev => ({...prev , name:"lee"}))

          // setMember({
          //   ...member,
          //   age : 30
          // });

          setMember(prev => ({...prev, age : 30}));
          

      }}
      >클릭</button>
    </div>
  )
}

export default Usestate2