//글쓰기 버튼 클릭시 실행 함수
const goWrite = () => {
  location.href = '/boards/go-write'
}

//게시글 상세

const listDetail = (boardNum) => {
  location.href = '/boards/detail?boardNum=' + boardNum 
}