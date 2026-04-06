import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {

  const router = useRouter();

  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>
  
        <Pressable onPress={e => router.push('/settings')}>
          <Text>세팅하러 가기</Text>
        </Pressable>
  
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})