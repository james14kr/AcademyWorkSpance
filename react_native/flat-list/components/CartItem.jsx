import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
// @expo/vector-icons: Expo에서 제공하는 아이콘 라이브러리
// MaterialIcons, FontAwesome, Ionicons 등 다양한 아이콘 세트 사용 가능
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// CartItem: 장바구니 개별 항목 컴포넌트
// props로 item 객체를 받아 상품명과 수정/삭제 아이콘을 표시
// CartList의 FlatList에서 renderItem을 통해 반복 렌더링됨
const CartItem = ({item, updateCart, deleteCart}) => {

  // isEditing: 현재 항목이 수정 모드인지 여부 (true면 TextInput 표시, false면 Text 표시)
  const [isEditing, setIsEditing] = useState(false)
  // editText: 수정 중인 텍스트를 임시로 저장 (확정 전까지 item.item과 별도 관리)
  const [editText, setEditText] = useState(item.item)

  return (
    // flexDirection: 'row'로 상품명과 아이콘을 가로로 배치
    <View style={styles.itemContainer}>
      {/* isEditing 값에 따라 수정 입력창 또는 텍스트+아이콘을 조건부 렌더링 */}
      {
        isEditing
        ?
        // 수정 모드: TextInput으로 전환
        <>
          <TextInput
            style={styles.input}
            value={editText}
            autoFocus={true}   // 수정 모드 진입 시 자동으로 키보드 올라옴
            onChangeText={text => setEditText(text)}
            onSubmitEditing={() => {
              // 키보드의 확인(엔터) 버튼 누르면 부모로 변경값 전달 후 수정 모드 종료
              updateCart(item.id, editText)
              setIsEditing(false)
            }}
            // 입력창 외부를 터치해 포커스를 잃으면(blur) 저장 없이 수정 모드 종료
            onBlur={() => setIsEditing(false)}
          />
        </>
        :
        // 일반 모드: 텍스트 + 수정/삭제 아이콘 표시
        <>
          <Text style={styles.title}>{item.item}</Text>
          {/* 수정 아이콘: 누르면 isEditing=true로 바꿔 수정 모드 진입 */}
          <Pressable
            onPress={() => {setIsEditing(true)}}
            style={styles.iconContainer}
          >
            <MaterialIcons
              name="edit"
              size={24}
              color="black"
              style={styles.icon}
            />
          </Pressable>

          {/* 삭제 아이콘: 누르면 deleteCart(id)를 호출해 해당 항목 삭제 */}
          <Pressable
            onPress={() => deleteCart(item.id)}
            style={styles.iconContainer}
          >
            <MaterialIcons
              name="delete-forever"
              size={24}
              color="black"
              style={styles.icon}
            />
          </Pressable>
        </>
      }
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  itemContainer:{
    backgroundColor : '#eeeeee',
    flexDirection : 'row',      // 자식 요소를 가로(행) 방향으로 배치
    paddingVertical : 10,        // 위아래 패딩
    paddingHorizontal : 12,      // 좌우 패딩
    justifyContent : 'center'   // 가로 축 기준 중앙 정렬
  },
  title:{
    width:'80%',   // 전체 너비의 80% 차지
    fontSize : 20
  },
  iconContainer : {
    width : '10%',
    justifyContent : 'center',
    alignItems : 'center'
  },
  input : {
    borderWidth : 1,
    width : '100%'
  }
})
