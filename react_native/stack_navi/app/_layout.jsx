import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

//같은 폴더 내의 컴포넌트의 레이아웃을 구성하는 파일
const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{headerShown : false}}
    /> //app 폴더 내에 만들어지는 컴포넌트는 스택 구조를 갖곘다.
  )
}

export default HomeLayout

const styles = StyleSheet.create({})