import React from "react";
import { Container, Input, RegisterContainer, ExerciseRegisterCard } from "./styles";
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native"
import ScreenTitle from "../../components/ScreenTitle";

export default function CreateTraining(){
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container>
                <ScreenTitle title="Novo Treino" backIcon={true}/>

                    <RegisterContainer>
                        <Input
                            placeholder="Nome do treino"
                            placeholderTextColor={"#b8b8b8"}
                        />

                        <ExerciseRegisterCard>
                            <View>
                                <TextInput
                                    placeholder="Nome do exercício"
                                    placeholderTextColor={"#b8b8b8"}
                                />
                                <TextInput
                                    placeholder="Peso"
                                    keyboardType="numeric"
                                    placeholderTextColor={"#b8b8b8"}
                                />
                                <TextInput
                                    placeholder="Séries"
                                    keyboardType="numeric"
                                    placeholderTextColor={"#b8b8b8"}
                                />
                                <TextInput
                                    placeholder="Repetições"
                                    keyboardType="numeric"
                                    placeholderTextColor={"#b8b8b8"}
                                />
                            </View>
                        </ExerciseRegisterCard>
                    </RegisterContainer>
                
            </Container>
        </TouchableWithoutFeedback>
    )
}