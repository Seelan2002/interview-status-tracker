import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import info from '../component/info/info';
import info1 from '../component/info1/info1';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName='info'>
      <Stack.Screen name="info" component={info} />
      <Stack.Screen name="info" component={info1} />
    </Stack.Navigator>
  );
}