import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/profile';
import YourCourses from '../screens/profile/your-courses';
const ProfileStack = createStackNavigator();

const ProfileStacks = () => {
    return (
        <ProfileStack.Navigator initialRouteName='Profile' headerMode='none'>
            <ProfileStack.Screen name='Profile' component={Profile} />
            <ProfileStack.Screen name='Your Courses' component={YourCourses} />
        </ProfileStack.Navigator>
    )
}

export default ProfileStacks
