import React from 'react';
import { Platform, UIManager, SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/authentication/login';
import SignUp from '../screens/authentication/sign-up';
import Results from '../screens/home/results';
import ProductDetail from '../screens/product-detail';
import YourCourses from '../screens/profile/your-courses';
import store from '../store';
import { Provider } from 'react-redux';
import MainTab from './main-tab-navigator';
import ChooseLesson from '../screens/product-detail/choose-lessons-course';
const Stack = createStackNavigator();

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
const myTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white'
    },
}
const AppNavigator = () => {
    return (
        <SafeAreaView style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 10 : 0 }}>
            <Provider store={store}>
                <NavigationContainer theme={myTheme}>
                    <Stack.Navigator headerMode='none' initialRouteName='Login'>
                        <Stack.Screen name='Login' component={Login} />
                        <Stack.Screen name='SignUp' component={SignUp} />
                        <Stack.Screen name='Home' component={MainTab} />
                        <Stack.Screen name='Results' component={Results} />
                        <Stack.Screen name='Product Detail' component={ProductDetail} />
                        <Stack.Screen name='Your Courses' component={YourCourses} />
                        <Stack.Screen name='Choose Lesson' component={ChooseLesson} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </SafeAreaView>
    );
}

export default AppNavigator;