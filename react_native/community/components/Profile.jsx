import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import background from '@/assets/images/face-01.jpg'
import { colors } from '../constants/colorConstant'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Profile = ({item}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.img}
          source={background}
        />
        <View>
          <Text style={styles.writer}>{item.writer}</Text>
          <Text style={styles.createDate
          }>{item.createDate}</Text>
        </View>
      </View>
      <FontAwesome name="ellipsis-v" size={24} color="black" />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    marginBottom: 10
  },
  img: {
    width: 50,
    height: 50,
    borderRadius : 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.GRAY_300
  },
  writer: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  createDate: {
    fontSize: 13,
    color: colors.GRAY_500
  }
})