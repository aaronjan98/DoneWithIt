import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

function App() {
  
  return ( 
    // <WelcomeScreen />
    <ViewImageScreen />
  );
}

export default App;