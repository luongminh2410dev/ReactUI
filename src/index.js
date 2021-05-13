import 'react-native-gesture-handler';
import React, { PureComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackContainerAuth from './screens/authentication/login';
class App extends PureComponent {
    render() {
        return (
            <NavigationContainer>
                <StackContainerAuth />
            </NavigationContainer>
        );
    }
}

export default App;