import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout
 = () => {
  return (
    <Tabs screenOptions={{headerShown : false}}>
      <Tabs.Screen
        //탭 터치를 열릴 파일명(폴더명 입력 시 해당 폴더 안의 index 파일)
        name='(home)' 
        options={{
          title : '홈'
        }}
      />
      <Tabs.Screen
        name='profile' 
        options={{
          title : '프로필'
        }}
      />
      <Tabs.Screen
        name='setting' 
        options={{
          title : '설정',
        }}
      />
    </Tabs>
  )
}

export default TabLayout


const styles = StyleSheet.create({})