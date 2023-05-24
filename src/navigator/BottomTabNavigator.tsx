import * as React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Colors from '../constants/colors';
import Home from '../screens/Home/';
import * as Icons from '../assets/icons';
import OtherScreens from '../screens/OtherScreens';

const Tab = createBottomTabNavigator();

const tabBarIcon =
  (routeName: string) =>
  ({color}: {color: string}) => {
    switch (routeName) {
      case 'Home':
        return <Icons.Home fill={color} />;
      case 'Discover':
        return <Icons.Discover fill={color} />;
      case 'Activity':
        return <Icons.Stopwatch fill={color} height={21} />;
      case 'Bookmarks':
        return <Icons.Bookmark fill={color} height={21} />;
      case 'Profile':
        return <Icons.Profile fill={color} />;
      default:
        break;
    }
  };

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: 'transparent',
  },
});

export default function App() {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.screenContainer}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: tabBarIcon(route.name),
        tabBarActiveTintColor: Colors.text.primary,
        tabBarInactiveTintColor: Colors.text.primaryLight,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: Colors.dark,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          lineHeight: 12,
          fontWeight: '500',
        },
      })}>
      <Tab.Screen name="Discover" component={OtherScreens} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Activity" component={OtherScreens} />
      <Tab.Screen name="Bookmarks" component={OtherScreens} />
      <Tab.Screen name="Profile" component={OtherScreens} />
    </Tab.Navigator>
  );
}
