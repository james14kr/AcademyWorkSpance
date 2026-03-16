import { Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
// SafeAreaView: 노치, 상태바 등 디바이스의 안전 영역을 자동으로 피해서 렌더링
// react-native 내장 SafeAreaView보다 react-native-safe-area-context 버전이 더 정확함
import { SafeAreaView } from 'react-native-safe-area-context'
import CartList from '../components/CartList'
import { dummy_data } from '../data/dummy'

// HomeScreen: 앱의 메인 화면 컴포넌트
// SafeAreaView로 감싸 디바이스 안전 영역 내에 CartList를 렌더링
const HomeScreen = () => {

  //새롭게 입력한 장 볼 물품을 저장할 state변수
  const[newItem, setNewItem] = useState('');

  // useState로 장바구니 목록 상태 관리
  // cartList: 현재 장바구니 데이터, setCartList: 데이터 변경 함수
  const[cartList, setCartList] = useState(dummy_data);

  // 새 항목을 장바구니에 추가하는 함수
  const addCart = () => {
    // 기존 항목들의 id만 뽑아서 배열로 만듦
    const idList = cartList.map((item, i) => {return item.id})

    // 새 항목 데이터 생성
    // 장바구니가 비어있으면 id=1, 아니면 현재 최대 id + 1로 중복 없이 생성
    const newData = {
      id : cartList.length === 0 ? 1 : Math.max(...idList) + 1,
      item : newItem
    }

    // 스프레드 연산자(...)로 기존 목록을 복사하고 새 항목을 뒤에 추가
    setCartList([...cartList, newData])

    // 입력창 초기화
    setNewItem('')
  }

  // 특정 항목의 텍스트를 수정하는 함수
  // id: 수정할 항목의 고유 식별자, newText: 변경할 새 텍스트
  const updateCart = (id, newText) => {
    // map으로 전체 배열을 순회하면서 id가 일치하는 항목만 스프레드로 복사 후 item 값 교체
    // id가 다른 항목은 그대로 유지
    setCartList(cartList.map(cartItem =>
      cartItem.id === id ? {...cartItem, item : newText} : cartItem
    ))
  }

  // 특정 항목을 장바구니에서 삭제하는 함수
  // filter로 전체 배열에서 id가 일치하는 항목만 제외한 새 배열 반환
  const deleteCart = (id) => {
    setCartList(cartList.filter(cartItem => cartItem.id !== id))
  }

  return (
    //빈 곳 터치 시 키보드 숨김 기능
    // accessible={false} props가 있어야 아이폰에서도 정상동작
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>To Do List</Text>
        </View>
        <TextInput 
          style={styles.input}
          value={newItem}
          onChangeText={text => setNewItem(text)}
          //터치 키보드의 ok, 선택, 엔터 터치 시 실행 이벤트
          onSubmitEditing={() => {addCart()}}
          placeholder='추가할 품목을 입력하세요'
        />
        <CartList cartList={cartList} updateCart={updateCart} deleteCart={deleteCart}/>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  title : {
    fontSize : 50,
    fontWeight : 500,
    marginBottom : 20
  },
  container : {
    paddingHorizontal : 12,
    flex : 1
  },
  input : {
    borderWidth : 1,
    marginBottom : 20
  }
})
