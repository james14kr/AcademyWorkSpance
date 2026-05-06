const getStuList = () => {
  const select_tag = document.querySelector('#classSelector')
  location.href = '/stu/main?classNum=' + select_tag.value
}