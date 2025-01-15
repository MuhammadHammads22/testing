import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ES6Functions } from './src/tasks/ES6funtions';
import { fetchDataPromise } from './src/tasks/promise';
import TodoContextProvider from './src/context/TodoContext';
import AppNavigator from './src/navigator/AppNavigator';

export default function App() {
  ES6Functions()

  // fetchDataPromise()
  // .then((data) => console.log(data))
  // .catch((error) => console.error(error));

// Converting to async/await
const fetchDataAsync = async () => {
  try {
    const data = await fetchDataPromise();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

// fetchDataAsync();

  return (
    <TodoContextProvider>
    <StatusBar style="auto" />
    <AppNavigator/>
    </TodoContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
