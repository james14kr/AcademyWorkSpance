import { Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import First from "./First"

function App() {
  return(
    <>
      <h2>라우팅 연습</h2>

      <div>
        <Link to={''}>HOME  </Link>
        <Link to={'/first'}>FIRST </Link>
        SECOND
      </div>

      <Routes>
        <Route 
          path=" "
          element = {<Home/>}
        />
        <Route 
          path="/first/:age"
          element = {<First/>}
        />
      </Routes>
    </>
  )
}

export default App
