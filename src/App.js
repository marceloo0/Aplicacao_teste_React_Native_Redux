import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';

import Routes from './routes';

const App = () => (
  <View style={{backgroundColor: '#FFF', flex: 1}}>
    <StatusBar barStyle="light-content" backgroundColor="#1605aa" />
    <NavigationContainer>
      <Provider store={store}>
        <Routes />
      </Provider>
    </NavigationContainer>
  </View>
);

export default App;
