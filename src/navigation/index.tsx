/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { HomeScreen } from '../screens/HomeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import { TimerScreen } from '../screens/TimerScreen';
import { useBackHandler } from '@react-native-community/hooks'

export default function Navigation() {

  useBackHandler(() => {
    return true
  })

  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/* 
/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = ()=> {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='TimerScreen' component={TimerScreen}/>
    </Stack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 *
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      
    </BottomTab.Navigator>
  );
}

 */