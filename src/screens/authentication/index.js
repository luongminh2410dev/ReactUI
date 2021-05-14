import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Login from './login'
import SignUp from './sign-up'

const StackAuth = createStackNavigator();
const StackContainerAuth = () => {
    return (
        <StackAuth.Navigator headerMode='none'>
            <StackAuth.Screen name='Login' component={Login} />
            <StackAuth.Screen name='SignUp' component={SignUp} />
        </StackAuth.Navigator>
    )
};

export default StackContainerAuth;
