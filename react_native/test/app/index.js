import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native'
import { dummyItem } from '../data/dummy'
import List from '../components/List'

const MainScreen = () => {

  const[newItem, setNewItem] = useState('')

  const[list, setList] = useState(dummyItem)

  const addList = () => {

    const idList = list.map((item, i) => {return item.id})

    const newData = {
      id : list.length === 0 ? 1 : Math.max(...idList) + 1,
      item : newItem
    }

    setList([...list, newData])

    setNewItem('')

  }

  const updateList = (id, newText) => {
    setList(list.map(list => 
      list.id === id ? {...list, item:newText} : list
    ))
  }

  const deleteList = (id) => {
    setList(list.filter(list => list.id !== id))
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>To Do List</Text>
        </View>
        <TextInput
          style={styles.input}
          value={newItem}
          onChangeText={text => setNewItem(text)}
          onSubmitEditing={() => {addList()}}
          placeholder='+ Add a Task'
        />
        <List list={list} updateList={updateList} deleteList={deleteList}/>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  title : {
    fontSize : 50,
    fontWeight : 500,
    marginBottom : 20
  },
  container : {
    paddingHorizontal : 12,
    flex : 1
  },
  input : {
    borderWidth : 1,
    marginBottom : 20,
    fontSize : 20,
    paddingLeft : 10
  }
})