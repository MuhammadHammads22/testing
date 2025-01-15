import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTodo } from '../context/TodoContext'
import Card from '../components/Card'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const TodoScreen = () => {
  const {addTodo,removeTodo,addItemToTodo,removeItemFromTodo,updateTodoItem,state}=useTodo()
  const [title,setTitle]=useState('')

  return (
    <SafeAreaView style={{flex:1,alignItems:'center'}}>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:responsiveWidth(7)}}>
        <TextInput style={{backgroundColor:'white',width:responsiveWidth(70)}} placeholder='Title' value={title} onChangeText={(text)=>{setTitle(text)}}></TextInput>
        <TouchableOpacity disabled={!title} onPress={()=>{addTodo(title);setTitle('')}} style={{padding:responsiveWidth(2),height:responsiveHeight(5.5),opacity:!title?.5:1,backgroundColor:'orange',alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'white'}}>Create Todo</Text>
        </TouchableOpacity>
      </View>
        <FlatList
      data={state.todos}
      horizontal // Enables horizontal scrolling
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Card updateItemFromTodo={updateTodoItem} removeItemFromTodo={removeItemFromTodo} addItemToTodo={addItemToTodo} deleteTodo={removeTodo} id={item.id} title={item.title} items={item.items} />}
      contentContainerStyle={{paddingHorizontal: responsiveWidth(2)}}
      showsHorizontalScrollIndicator={false}
    />
    </SafeAreaView>
  )
}

export default TodoScreen