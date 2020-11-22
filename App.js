import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';

function App() {
  
  return ( 
    <WelcomeScreen />
  );
}

export default App;