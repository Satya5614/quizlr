import React from 'react';
import {StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Styles from './constants/styles';
import Colors from './constants/colors';
import BottomTabNavigator from './navigator/BottomTabNavigator';

const App = () => {
  return (
    <GestureHandlerRootView style={Styles.flex1}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <LinearGradient colors={Colors.gradient} style={Styles.flex1}>
          <BottomTabNavigator />
        </LinearGradient>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
