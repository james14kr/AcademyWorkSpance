import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Profile from './Profile';
import { colors } from '../constants/colorConstant';

const FeedItem = ({item}) => {

  //좋아요 상태 변수
  const [isLike, setIsLike] = useState(false);

  return (
    <View style={styles.feedContainer}>
      <Profile item={item}/>
      {/* 작성자 정보 */}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
      <View style={styles.iconContainer}>
        <Pressable style={styles.menu}>
          <FontAwesome name={isLike ? 'heart' : 'heart-o'} size={24} color="black" />
          <Text>{item.likeCnt}</Text>
        </Pressable>
        <Pressable style={styles.menu}>
          <FontAwesome name="comment" size={24} color="black" />
          <Text>{item.replyCnt}</Text>
        </Pressable>
        <Pressable style={styles.menu}>
          <FontAwesome name="eye" size={24} color="black" />
          <Text>{item.readCnt}</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default FeedItem

const styles = StyleSheet.create({
  feedContainer: {
    backgroundColor: 'white',
    padding: 16
  },
  title: {
    fontSize: 16,
    marginBottom: 12
  },
  content: {
    fontSize: 14,
    color: colors.GRAY_600,
    marginBottom: 12
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.GRAY_300
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    paddingTop: 12
  }
})