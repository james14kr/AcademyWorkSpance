import { Keyboard, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import CustomInput from '../../../components/common/CustomInput';

//피드 등록 화면
const RegFeedScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior='padding'>
        <CustomInput label='아이디'/>
        <CustomInput label='비밀번호' isPw={true}/>
        <CustomInput label='이름'/>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default RegFeedScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    paddingHorizontal: 12,
    gap: 12
  }
})