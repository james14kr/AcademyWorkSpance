import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Study_1 from '../components/Study_1'
import Study_2 from '../components/Study_2'


const HomeScreen = () => {

  return (
    //폰 화면에서 툴바영역을 제외한 나머지 영역만 사용할 때 작성
    <SafeAreaView style={styles.container}>
      {/* <Study_1/> */}
      <Study_2/>
    </SafeAreaView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container : {
    flex : 1
  }
})