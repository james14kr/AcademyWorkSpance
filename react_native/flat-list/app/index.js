import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// SafeAreaView: 노치, 상태바 등 디바이스의 안전 영역을 자동으로 피해서 렌더링
// react-native 내장 SafeAreaView보다 react-native-safe-area-context 버전이 더 정확함
import { SafeAreaView } from 'react-native-safe-area-context'
import CartList from '../components/CartList'

// HomeScreen: 앱의 메인 화면 컴포넌트
// SafeAreaView로 감싸 디바이스 안전 영역 내에 CartList를 렌더링
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <CartList/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
