const deleteBoard = (boardNum) => {
  const result = confirm('삭제?')

  if(result){
    location.href = '/boards/delete?boardNum=' + boardNum 
  }
}