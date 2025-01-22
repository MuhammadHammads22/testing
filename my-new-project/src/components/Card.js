import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { FontAwesome, } from '@expo/vector-icons';
import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Card = ({ title, items, deleteTodo, id, addItemToTodo,removeItemFromTodo,updateItemFromTodo }) =>{
    const [todoItem,setTodoItem]=useState('')
  return(
    <View style={styles.card}>
      <TouchableOpacity onPress={()=>{deleteTodo(id)}}>
        <FontAwesome style={{position:'absolute',right:0}} name="close" size={responsiveWidth(8)} color={'black'}/>
      </TouchableOpacity>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:responsiveWidth(7)}}>
              <TextInput style={{backgroundColor:'white',width:responsiveWidth(40)}} placeholder='Item' value={todoItem} onChangeText={(text)=>{setTodoItem(text)}}></TextInput>
              <TouchableOpacity disabled={!todoItem} onPress={()=>{
                addItemToTodo(id,todoItem)
                setTodoItem('')
                }} style={{padding:responsiveWidth(2),height:responsiveHeight(5.5),opacity:!todoItem?.5:1,backgroundColor:'#316FF6',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'white'}}>Add Item</Text>
              </TouchableOpacity>
            </View>
      {items.map((item, index) => (
        <TodoItem updateItemFromTodo={updateItemFromTodo}id={id} removeItemFromTodo={removeItemFromTodo} index={index} item={item} />
      //   <View key={index} style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      //   {
      //   isEditing?
      //   <TextInput key={index} style={styles.cardItem} onChangeText={(text)=>{setEditingValue(text)}}>
      //     {editingValue}
      //   </TextInput>
      //   :
      //   <Text key={index} style={styles.cardItem}>
      //     {item}
      //   </Text>
      //   }
        
      //   <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      //   <TouchableOpacity style={{backgroundColor:'orange',padding:responsiveFontSize(.5)}} onPress={()=>{!isEditing?(()=>{setIsEditing((value)=>!value);setEditingValue(item)})():(()=>{setIsEditing(value=>!value);updateItemFromTodo(id,index,editingValue);})()}}>
      //   <Text>{isEditing?'Save':'Edit'}</Text>
      //   {/* <FontAwesome style={{}} name="close" size={responsiveWidth(6)} color={'black'}/> */}
      // </TouchableOpacity>
      // <TouchableOpacity style={{backgroundColor:'red',padding:responsiveFontSize(.5)}} onPress={()=>{removeItemFromTodo(id,index)}}>
      //   <Text>Delete</Text>
      // </TouchableOpacity>
      // </View>
      //   </View>
      ))
      }
    </View>
  );
}
export default React.memo(Card)
  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#f8f9fa',
      borderRadius: responsiveWidth(2),
      height:responsiveHeight(50),
      marginHorizontal: responsiveWidth(3),
      padding: responsiveWidth(4),
      width: responsiveWidth(70), // Adjust width of the card dynamically
      elevation: 5, // Shadow for Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: responsiveWidth(1),
    },
    cardTitle: {
      fontSize: responsiveFontSize(2.5), // Responsive font size for title
      fontWeight: 'bold',
      marginBottom: responsiveHeight(1),
      color: '#343a40',
    },
    cardItem: {
      fontSize: responsiveFontSize(2), // Responsive font size for items
      marginBottom: responsiveHeight(0.5),
      color: '#6c757d',
    },
  });