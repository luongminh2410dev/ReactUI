import React from 'react';
import { StatusBar, Platform, UIManager, SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/authentication/login';
import SignUp from '../screens/authentication/sign-up';
import Home from '../screens/home'
import Profile from '../screens/profile'
import Settings from '../screens/settings'
import styles from '../screens/home/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Results from '../screens/results';
import ProductDetail from '../screens/product-detail';
import CourseItem from '../components/course-item';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
const HomeTab = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                activeTintColor: '#E3562A',
                labelStyle: styles.label_style,
                style: styles.tab_bar,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="book" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={20} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="settings-sharp" size={20} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
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
            <NavigationContainer theme={myTheme}>
                <Stack.Navigator headerMode='none' initialRouteName='Login'>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='SignUp' component={SignUp} />
                    <Stack.Screen name='Home' component={HomeTab} />
                    <Stack.Screen name='Results' component={Results} />
                    <Stack.Screen name='Product Detail' component={ProductDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default AppNavigator;