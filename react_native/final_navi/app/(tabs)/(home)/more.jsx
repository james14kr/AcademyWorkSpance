import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

const MoreScreen = () => {

  const router = useRouter();

  return (
    <SafeAreaView>
      <Pressable onPress={e => router.push('/profile')}>
        <Text>/profile/index.jsx</Text>
      </Pressable>

      <Pressable onPress={e => router.push('/profile/second')}>
        <Text>/profile/second.jsx</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default MoreScreen

const styles = StyleSheet.create({})