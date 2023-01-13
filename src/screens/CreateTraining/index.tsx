import React from "react";
import { Container } from "./styles";
import { View, Text, StyleSheet } from "react-native"
import ScreenTitle from "../../components/ScreenTitle";

export default function CreateTraining(){
    return (
        <Container>
            <ScreenTitle title="Novo Treino" backIcon={true}/>
            <Text>Tela de criação de treinos</Text>
        </Container>
    )
}