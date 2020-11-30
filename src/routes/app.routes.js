import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Resgate from '../pages/Resgate';
import Investimentos from '../pages/Investimentos';
import ResgateSucesso from '../pages/ResgateSucesso';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#ffffff'},
    }}
    initialRouteName="Investimentos">
    <App.Screen
      options={{
        headerShown: false,
        headerTransparent: true,
      }}
      name="Investimentos"
      component={Investimentos}
    />
    <App.Screen
      options={{
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}
      name="Resgate"
      component={Resgate}
    />
    <App.Screen
      options={{
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}
      name="ResgateSucesso"
      component={ResgateSucesso}
    />
  </App.Navigator>
);

export default AppRoutes;
