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

  const addCart = () => {
    //추가할 id
   const idList = cartList.map((item, i) => {return item.id})

   //추가할 데이터
   const newData = {
      id : cartList.length === 0 ? 1 : Math.max(...idList) + 1,
      item : newItem
   }

   //추가할 데이터를 cartList에 저장
   setCartList([...cartList, newData])

   setNewItem('')

  }

  const updateCart = (id, newText) => {
    setCartList(cartList.map(cartItem => 
      cartItem.id === id ? {...cartItem, item : newText} : cartItem
    ))
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
        <CartList cartList={cartList} updateCart={updateCart}/>
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
