import 'react-native-gesture-handler';
import React, { PureComponent } from 'react';
import Root from './routes';
import store from './store';
import { Provider } from 'react-redux';
class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}

export default App;