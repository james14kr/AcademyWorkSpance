import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
// @expo/vector-icons: Expo에서 제공하는 아이콘 라이브러리
// MaterialIcons, FontAwesome, Ionicons 등 다양한 아이콘 세트 사용 가능
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// CartItem: 장바구니 개별 항목 컴포넌트
// props로 item 객체를 받아 상품명과 수정/삭제 아이콘을 표시
// CartList의 FlatList에서 renderItem을 통해 반복 렌더링됨
const CartItem = ({item, updateCart}) => {

  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(item.item)

  return (
    // flexDirection: 'row'로 상품명과 아이콘을 가로로 배치
    <View style={styles.itemContainer}>
      {
        isEditing 
        ? 
        <>
          <TextInput 
            style={styles.input}
            value={editText}  
            autoFocus={true}
            onChangeText={text => setEditText(text)}
            onSubmitEditing={() => {
              updateCart(item.id, editText)
              setIsEditing(false)
            }}
            onBlur={() => setIsEditing(false)}
          />
        </>
        : 
        <>
          <Text style={styles.title}>{item.item}</Text>
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

          <Pressable 
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
