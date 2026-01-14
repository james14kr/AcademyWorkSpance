import Footer from "./Footer";
import Header from "./Header"

//함수가 아니고 컴포넌트(Component)
function App() {
  let str = 'hi';

  //return문 안에는 html 코드는 반드시 하나의 태그에 포항되어야 함
  return (

    <div>
      <Header/>
      <div>
        <div>{str}</div>
        <div>{str}</div>
        <div>{str}</div>
        <div>{str}</div>
      </div>
      <Footer/>
      <input type="text"/>
      <br/>
    </div>
    
  )
}

export default App
