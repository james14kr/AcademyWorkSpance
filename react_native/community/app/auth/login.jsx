import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'
import { useRouter } from 'expo-router'

const LoginScreen = () => {

  const router = useRouter();

  const [loginData, setLoginData] = useState({
    memEmail: '',
    memPw: ''
  })

  const handleLoginData = (text, name) => {
    setLoginData({
      ...loginData,
      [name] : text
    })
  }

  const login = () => {
    axios.post('http://192.168.30.116:8080/member/login', loginData)
    .then(response => {
      console.log(response.status)
      console.log(response.headers.authorization)

      if(response.status === 200){
        SecureStore.setItemAsync('accessToken', response.headers.authorization)
        .then(() => router.replace('/'))
        .catch(e => console.log(e))
      }
    })
    .catch(e => console.log(e))
  }

  return (
    <View>
      <TextInput style={styles.textInput} value={loginData.memEmail} onChangeText={text => handleLoginData(text, 'memEmail')}/>
      <TextInput style={styles.textInput} value={loginData.memPw} onChangeText={text => handleLoginData(text, 'memPw')}/>
      <Pressable onPress={() => login()}>
        <Text>로그인</Text>
      </Pressable>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    marginBottom: 10
  }
})
