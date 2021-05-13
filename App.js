import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackContainerAuth from './src/screen/Authen';
const App = () => {
  return (
    <>
      <NavigationContainer>
        <StackContainerAuth />
      </NavigationContainer>
    </>
  );
};
{/* <SafeAreaView style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 10 : 0 }}>
        <SignUp />
      </SafeAreaView> */}
export default App;
