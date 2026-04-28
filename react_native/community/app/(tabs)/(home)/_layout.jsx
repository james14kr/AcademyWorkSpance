import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useRouter } from 'expo-router'
import * as SecureStore from 'expo-secure-store'

const HomeLayout = () => {
  const router = useRouter();

  //로딩 중 여부를 판단하는 변수
  const [isLoading, setIsLoading] = useState(true);

  const [isLogin, setIsLogin] = useState(false)

  //로그인 여부 체크
  useEffect(() => {
    checkLogin();

  }, [])

  useEffect(() => {
    if(isLoading) return;

    if(isLogin){
      router.replace('/')
    }else{
      router.replace('/auth/login')
    }
  },[isLogin, isLoading])

  const checkLogin = async () => {
    //SecureStore에 저장된 토큰 가져오기
    const result = await SecureStore.getItemAsync('accessToken')
    console.log(result)

    if(result){
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }
    setIsLoading(false)
  }

  if(isLoading){
    return(
      <View style={styles.indicator}>
        <ActivityIndicator size={'large'}/>
      </View>
    )
  }

  return (
    <Stack screenOptions={{headerShown: false}}/>
  )
}

export default HomeLayout

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
