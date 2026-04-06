import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DetailScreen = () => {
  //페이지 이동 시 전달되는 데이터 받기(객체로 전달 받음)
  const parmas = useLocalSearchParams();

  return (
    <View>
      <Text>DetailScreen</Text>
      <Text>{parmas.id}</Text>
      <Text>{parmas.age}</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})