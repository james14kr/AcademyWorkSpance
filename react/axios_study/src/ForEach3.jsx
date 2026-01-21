import React from 'react'

const ForEach3 = () => {

  const options = ['C++', "JAVA", "PYTHon"];

  return (
    <>
      <select>
        <option>과목 선택</option>
        {
          options.map((e, i) => {
            return(
              <option key={e}></option>
            )
          })
        }        
      </select>
    </>
  )
}

export default ForEach3