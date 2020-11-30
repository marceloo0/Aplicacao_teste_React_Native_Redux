import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import CountProvider from './context/Saldo';

import Routes from './routes';

const App = () => (
  <View style={{backgroundColor: '#FFF', flex: 1}}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#1605aa" />
      <CountProvider>
        <Routes />
      </CountProvider>
    </NavigationContainer>
  </View>
);

export default App;
