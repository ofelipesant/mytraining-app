import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './src/Main';
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style='light'/>
        <Main/>
    </NavigationContainer>
  )
}


