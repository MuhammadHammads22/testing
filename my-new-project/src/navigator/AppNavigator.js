import { View, Text } from 'react-native'
import React from 'react'
import Practice from '../screens/Practice';
import TodoScreen from '../screens/TodoScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        {/* <AppContext.Provider value={appContext}> */}
        <Stack.Navigator
          initialRouteName="TodoScreen"
          screenOptions={({ navigation }) => ({
            headerShown: false
          })}
        >
          <Stack.Screen
            name="TodoScreen"
            component={TodoScreen}
            options={{ headerShown: true,
                title:'Todos'
             }}
          />
          <Stack.Screen
            name="PracticeScreen"
            component={Practice}
            options={{ headerShown: false }}
          />
            </Stack.Navigator>
        {/* </AppContext.Provider> */}
      </NavigationContainer>
  )
}

export default AppNavigator