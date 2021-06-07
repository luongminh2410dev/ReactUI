import React, { useEffect, useState } from 'react';
import { Platform, UIManager, SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/authentication/login';
import SignUp from '../screens/authentication/sign-up';
import Results from '../screens/home/results';
import ProductDetail from '../screens/product-detail';
import YourCourses from '../screens/profile/your-courses';
import MainTab from './main-tab-navigator';
import ChooseLesson from '../screens/choose-lessons-course';
import CourseLesson from '../screens/course-lesson';
import { connect } from 'react-redux';
import { initCart } from '../actions/cart';
import AsyncStorage from '@react-native-community/async-storage';
import TestQuestion from '../screens/test-question';
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

const AppNavigator = ({ initCart }) => {
    const init = async () => {
        const initValue = JSON.parse(await AsyncStorage.getItem('cart'))
        if (initValue.length) {
            initCart(initValue)
        }
    }
    useEffect(() => {
        init()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 10 : 0 }}>
            <NavigationContainer theme={myTheme}>
                <Stack.Navigator headerMode='none' initialRouteName='Login'>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='SignUp' component={SignUp} />
                    <Stack.Screen name='Home' component={MainTab} />
                    <Stack.Screen name='Results' component={Results} />
                    <Stack.Screen name='Product Detail' component={ProductDetail} />
                    <Stack.Screen name='Your Courses' component={YourCourses} />
                    <Stack.Screen name='Choose Lesson' component={ChooseLesson} />
                    <Stack.Screen name='Course Lesson' component={CourseLesson} />
                    <Stack.Screen name='Test Question' component={TestQuestion} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default connect(null, { initCart })(AppNavigator);