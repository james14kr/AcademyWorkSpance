import React from 'react'
import './Foreach.css'

const ForEach4 = () => {

  const stuList = [
    {
      stuNum : 1,
      name : 'kim',
      score : 80
    },
    {
      stuNum : 2,
      name : 'Lee',
      score : 90
    },
    {
      stuNum : 3,
      name : 'Park',
      score : 100
    }
  ]

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>학번</td>
            <td>이름</td>
            <td>점수</td>
          </tr>
        </thead>
        <tbody>
          {
            stuList.map((e) => {
              return(
                <tr key={e.stuNum}>
                  <td>{e.stuNum}</td>
                  <td>{e.name}</td>
                  <td>{e.score}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default ForEach4