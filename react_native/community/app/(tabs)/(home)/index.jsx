//최초로 실행되는 파일
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import React, { useCallback } from 'react'
import FeedItem from '../../../components/FeedItem'
import { dummyData } from '../../../api/dummyData'
import { colors } from '../../../constants/colorConstant'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFocusEffect, useRouter } from 'expo-router'
import axios from 'axios'

const HomeScreen = () => {

  const feedList = dummyData;

  const router = useRouter();

  //앱에서 페이지 전환 될때마다 실행
  useFocusEffect(useCallback(() => {
    getData();
  }, []));

  const getData = () => {
    axios.get('http://192.168.30.116:8080/members/test3')
    .then(response => { 
      console.log(response.data);
    })
    .catch(e => console.log(e));
  } 

  return (
    <View style={styles.container}>
      <FlatList
        //반복할 데이터
        data={feedList}

        //무엇을 반복으로 그릴거내
        //매개변수 item: 데이터 하나하나
        renderItem={({item}) => <FeedItem item={item}/>}

        //map함수의 key와 동일
        keyExtractor={(item) => item.id}

        //디자인
        contentContainerStyle={styles.listContainer}
      />

      <Pressable 
        // style={styles.writeBtn}
        style={({pressed}) => [styles.writeBtn, pressed && styles.pressed]}
        // style={(param) => {
        //   console.log(param);
        //   return styles.writeBtn
        // }}
        onPress={e => router.push('/reg-feed')}
      >
        <FontAwesome name="pencil" size={24} color="white" />
      </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex : 1
  },
  listContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    gap: 10,
    backgroundColor: colors.GRAY_200
  },
  writeBtn: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: 40,
    right: 40,
    backgroundColor: colors.ORANGE_600,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pressed: {
    opacity: 0.8
  }
})
