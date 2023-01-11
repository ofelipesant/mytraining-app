import React from "react";
import { StyleSheet } from "react-native";
import Header from '../components/Header'
import { SafeAreaView } from "react-native";
import Trainings from "../screens/Trainings";

export default function Main(){
    return(
        <SafeAreaView style={styles.containerSafeArea}>
            <Header />
            <Trainings/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerSafeArea: {
      flex: 1,
      backgroundColor: '#3D3D3D',
    },
  });