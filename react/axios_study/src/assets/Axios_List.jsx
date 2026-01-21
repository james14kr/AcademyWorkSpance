import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios_List = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axios.get("http://localhost:8080/emp")
    .then((response) => {
      setData(response.data);
    })
    .catch(e => console.log(e))
  }

  console.log(data)

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>사번</td>
            <td>이름</td>
            <td>부서명</td>
            <td>급여</td>
            <td>직급</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((e,i) => {
              return(
                <tr key={i}>
                  <td>{e.empNum}</td>
                  <td>{e.empName}</td>
                  <td>{e.depName}</td>
                  <td>{e.salary}</td>
                  <td>{e.rank}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </>
  )
}

export default Axios_List