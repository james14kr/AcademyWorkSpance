import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ListItem = ({item, updateList, deleteList}) => {

  const [isEditing, setIsEditing] = useState(false)

  const [editText, setEditText] = useState(item.item)

  return (
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
              updateList(item.id, editText)
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
              name='edit'
              size={24}
              color='black'
              style={styles.icon}
            >

            </MaterialIcons>
          </Pressable>
          <Pressable
            onPress={() => {
              Alert.alert(
                `${item.item}을 삭제하시겠습니까?`, 
                '', 
                [
                  {text : '취소', style : 'cancel'},
                  {text : '확인', onPress : () => deleteList(item.id)}
                ]
              )
            }}
            style={styles.iconContainer}
          >
            <MaterialIcons
              name='delete'
              size={24}
              color='black'
              style={styles.icon}
            >

            </MaterialIcons>
          </Pressable>
        </>
      }
    </View>
  )
  
}

export default ListItem

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
