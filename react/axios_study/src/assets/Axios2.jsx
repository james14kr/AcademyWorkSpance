import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios2 = () => {

  const[data, setData] = useState("");
  
  useEffect (() => {
    axios.get('http://localhost:8080/emp/1')
    .then( (response) => {
      setData(response.data);
    })
    .catch( () => {});
  }, []);

  return (
    <div>
      사원 이름 : {data.empName}
    </div>
  )
}

export default Axios2