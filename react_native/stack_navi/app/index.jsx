import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

//앱 실행 시 최초 보이는 컴포넌트 
const HomeScreen = () => {

  //reat-native에서 페이지 이동 시 사용하는 객체
  const router = useRouter();

  return (
    <View>
      <Text>메인페이지</Text>

      <Pressable onPress={e => router.push('/detail')}>
        <Text>상세 페이지</Text>
      </Pressable>

      <Pressable onPress={e => router.push({pathname : '/detail', params : {id : 'abc', age : 20}})}>
        <Text>상세 페이지</Text>
      </Pressable>

      <Pressable onPress={e => router.replace('/my-page')}>
        <Text>마이 페이지</Text>
      </Pressable>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})