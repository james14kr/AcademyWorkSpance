import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Pressable } from 'react-native'


//프로젝트 실행 시 최초 실행 파일
//최초 실행파일 순서 _layout.js -> index,js
//파일의 이름은 통상적으로 HomeScreen으로 작성 함
//리엑트 네이티브는 파일명과 컴포넌트명이 같지 않는 경우가 많음

//<View> -> html의 div와 같은 역할
//react native에서는 문자 적성 시 반드시 <Text>컴포넌트로 감사야 함
const Study_1 = () => {

  const [id, setId] = useState('')

  return (
    <View style={styles.container}>
      <View>
        <Text>아이디</Text>
        <TextInput 
          style={styles.input}

          onChangeText={text => {
            console.log(text)
            setId(text)
          }}

          onChange={ e => {
            console.log(e.nativeEvent.text)
          }}
        />
        
        {/* 버튼 */}
        <Pressable 
          onPress={e => {alert(1)}}
          style={styles.btnContainer}
        >
          <Text style={styles.btn}>버튼</Text>
        </Pressable>


      </View>
    </View>
  )
}

export default Study_1

//디자인 중요 사항!
//react native의 모든 컴포넌트는 전부 flex가 기본 적용되어 있음
//컴포넌트의 기본 디자인 - display : flex, flex-direction : column
const styles = StyleSheet.create({

  container : {
    borderWidth : 3,
    borderColor : 'red',
    //세로 화면 꽉 체움
    flex : 1
  },
  input:{
    borderWidth : 1,
    borderColor : 'blue',
    borderRadius : 4
  },

  btnContainer : {
    backgroundColor : 'blue',
    width : '30%',
    height : 34,
    marginTop : 10,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 10
  },

  btn : {
    color : 'white'
  }

})