import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

const TodoItem = ({index,id,item,updateItemFromTodo, removeItemFromTodo}) => {
     const [isEditing,setIsEditing]=useState(false)
     const [editingValue,setEditingValue]=useState('')
    return (
     <View key={index} style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            {
            isEditing?
            <TextInput key={index} style={styles.cardItem} onChangeText={(text)=>{setEditingValue(text)}}>
              {editingValue}
            </TextInput>
            :
            <Text key={index} style={styles.cardItem}>
              {item}
            </Text>
            }
            
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={{backgroundColor:'orange',padding:responsiveFontSize(.5)}} onPress={()=>{!isEditing?(()=>{setIsEditing((value)=>!value);setEditingValue(item)})():(()=>{setIsEditing(value=>!value);updateItemFromTodo(id,index,editingValue);})()}}>
            <Text>{isEditing?'Save':'Edit'}</Text>
            {/* <FontAwesome style={{}} name="close" size={responsiveWidth(6)} color={'black'}/> */}
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'red',padding:responsiveFontSize(.5)}} onPress={()=>{removeItemFromTodo(id,index)}}>
            <Text>Delete</Text>
          </TouchableOpacity>
          </View>
            </View>
          
  )
}

export default React.memo(TodoItem)

const styles = StyleSheet.create({
    cardItem: {
      fontSize: responsiveFontSize(2), // Responsive font size for items
      marginBottom: responsiveHeight(0.5),
      color: '#6c757d',
    },
  });

