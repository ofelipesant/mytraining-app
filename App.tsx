import React from 'react';
import Main from './src/Main';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <StatusBar style='light'/>
      <Header />
      <Main/>
    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: '#3D3D3D',
  },
});


