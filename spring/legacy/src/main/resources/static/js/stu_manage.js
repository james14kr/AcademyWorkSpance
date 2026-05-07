const getStuList = () => {
  const select_tag = document.querySelector('#classSelector')
  location.href = '/stu/main?classNum=' + select_tag.value
}

const asyncGetList = () => {
  const select_tag = document.querySelector('#classSelector')
  const classNum = select_tag.value

  axios.get(`/stu/list?classNum=${classNum}`)
  .then(response => {
    console.log(response.data)

    //조회한 데이터로 그림을 다시 그린다
    //1. 그림을 다시 그릴 태그를 선택한다.
    const tbody_tag = document.querySelector('#list_table > tbody')

    //2. 기존 tbody안의 모든 태그를 지운다
    tbody_tag.innerHTML = ''

    //3. 새롭게 그릴 그림을 문자열로 만든다
    let str = ``;
    response.data.forEach((stu, index) => {
      str += `
        <tr>
          <td>${index + 1}</td>
          <td>${stu.stuNum}</td>
          <td>${stu.stuName}</td>
          <td>${stu.stuYear}</td>
          <td>${stu.classNum}</td>
          <td>${stu.className}</td>
        </tr>
      `
    })

    //4. 새롭게 만든 그림을 tbody에 넣는다
    tbody_tag.insertAdjacentHTML("afterbegin", str)

  })
  .catch(e => console.log(e))

}

const showScoreInput = (stuNum, stuName) => {
  const score_tbody = document.querySelector('#score_table')

  const str = `
    <thead>
      <tr>
        <td>학생명</td>
        <td>국어점수</td>
        <td>영어점수</td>
        <td>수학점수</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${stuName}</td>
        <td><input type="number"></td>
        <td><input type="number"></td>
        <td><input type="number"></td>
      </tr>
    </tbody>
    
  `

  score_tbody.innerHTML = str;

}