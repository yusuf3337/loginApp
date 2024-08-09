import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './Navigation/AuthNavigator'
import { PaperProvider } from 'react-native-paper';
import { TabBarVisibilityProvider } from './context/TabBarVisibilityContext';

export default function App() {

  return (
    <PaperProvider>
      <TabBarVisibilityProvider>
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
    </TabBarVisibilityProvider>
    </PaperProvider>

  );
}

