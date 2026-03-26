import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListItem from './ListItem'

const List = ({list, updateList, deleteList}) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={list}
        renderItem={({item}) => <ListItem item={item} updateList={updateList} deleteList={deleteList}/>}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        keyboardShouldPersistTaps = 'handled'
        contentContainerStyle={{
          gap : 12
        }}
      />
    </View>
  )
}

export default List

const styles = StyleSheet.create({
   listContainer : {
    width : '100%',
    marginHorizontal : 'auto', // 수평 중앙 정렬
    padding : 12,
    backgroundColor : '#dddddd'
  }
})