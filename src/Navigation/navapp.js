import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import info from './src/component/info/info';
import info1 from './src/component/info1/info1';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/Navigation';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return(
    <SafeAreaView style={styles.root}>
      <NavigationContainer>
  <MyStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#F9FBfC'
  },
});
export default App;