import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';
import Login from './src/screen/Authen/Login';
import SignUp from './src/screen/Authen/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' headerMode='none'>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignUp' component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
{/* <SafeAreaView style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 10 : 0 }}>
        <SignUp />
      </SafeAreaView> */}
export default App;
