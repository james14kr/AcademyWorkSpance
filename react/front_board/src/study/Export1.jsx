import React from 'react'

//js 파일의 편수 및 함수 import방식 1
import { age, test1 } from '../util/myMath'

//js 파일의 편수 및 함수 import방식 2
import * as fun from '../util/myMath'

const Export1 = () => {

  const data1 = age;
  test1();
  fun.test2();

  return (
    <div>Export1</div>
  )
}

export default Export1