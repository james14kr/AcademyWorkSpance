import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Study_2 = () => {

  const [login, setLogin] = useState({
    id : '',
    pw : ''
  })

  const [isShow, setIsShow] = useState(false)

  const changeLogin = (key, value) => {
    setLogin({
      ...login, 
      [key] : value
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <TextInput
          style={styles.input}
          value={login.id}
          onChangeText={id => changeLogin('id' , id)}
          placeholderTextColor={'lightgray'}
          placeholder='Input Your ID'
        />

        <TextInput
          style={styles.input}
          value={login.pw}
          onChangeText={pw => changeLogin('pw', pw)}
          placeholderTextColor={'lightgray'}
          placeholder='Input Your Password'
          secureTextEntry={true}
        />

        <Pressable
          style={styles.btn}
          onPress={() => setIsShow(true)}
        >
          <Text style={{color : 'white'}}>로그인</Text>
        </Pressable>

        {
          isShow && 
          <View>
            <Text>아이디 : {login.id}</Text>
            <Text>비밀번호 : {login.pw}</Text>
          </View>
        }
      </View>
    </View>
  )
}

export default Study_2

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'white',
  },
  loginForm : {
    width : '80%',
    padding : 20,
    backgroundColor : 'white',
    borderRadius : 10,
    gap : 10
  },
  input : {
    borderWidth : 1,
    borderColor : '#cccccc',
    borderRadius : 6,
    padding : 10,
    fontSize : 16
  },
  btn : {
    backgroundColor : '#4a90e2',
    padding : 12,
    borderRadius : 6,
    alignItems : 'center'
  }
})
