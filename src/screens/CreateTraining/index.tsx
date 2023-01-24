import React, { useState, useEffect } from "react";
import { 
        Container, 
        Input, 
        RegisterContainer, 
        ExerciseRegisterCard, 
        InputTrainingCard, 
        AddExerciseButton, 
        Subtitle, 
        SaveContainer, 
        SaveButton, 
        SaveButtonText 
    } from "./styles";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native"
import ScreenTitle from "../../components/ScreenTitle";
import { MaterialIcons } from '@expo/vector-icons'; 
import { useForm } from 'react-hook-form'

export default function CreateTraining(){
    const { register, setValue, handleSubmit } = useForm()
    const [ trainingName, setTrainingName ] = useState('')
    const [ exercises, setExercises ] = useState([
        {
            name: '',
            weight: '',
            series: '',
            repetitions: ''
        },
    ])

    function addExerciseCard(data){
        const exerciseDataDefault = [
            {
                name: '',
                weight: '',
                series: '',
                repetitions: ''
            }
        ]
        const exerciseList = [...exercises, data, exerciseDataDefault]
        setExercises(exerciseList)
    }

    function saveTraining(){
        console.log('exercícios', exercises)
    }

    useEffect(() => {
        register('name')
        register('weight')
        register('repetitions')
        register('series')
    }, [register])

    useEffect(() => {
        console.log('training name', trainingName)
    }, [trainingName])

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container>
                <ScreenTitle title="Novo Treino" backIcon={true}/>
                
                    <SaveContainer>
                        <SaveButton onPress={() => saveTraining()}>
                            <SaveButtonText>Salvar Treino</SaveButtonText>
                        </SaveButton>
                    </SaveContainer>

                    <RegisterContainer>
                        <Input
                            placeholder="Nome do treino"
                            placeholderTextColor={"#b8b8b8ca"}
                            onChangeText={setTrainingName}
                        />
                        <Subtitle>Exercícios:</Subtitle>

                        {exercises && exercises.map((exercise, index) => {
                            return(
                            <ExerciseRegisterCard key={index}>
                                <View>
                                    <InputTrainingCard
                                        placeholder="Nome do exercício"
                                        placeholderTextColor={"#b8b8b8ca"}
                                        onChangeText={(text) => setValue('name', text)}
                                    />
                                    <InputTrainingCard
                                        placeholder="Peso (kg)"
                                        keyboardType="numeric"
                                        placeholderTextColor={"#b8b8b8ca"}
                                        onChangeText={(text) => setValue('weight', text)}
                                    />
                                    <InputTrainingCard
                                        placeholder="Séries"
                                        keyboardType="numeric"
                                        placeholderTextColor={"#b8b8b8ca"}
                                        onChangeText={(text) => setValue('series', text)}
                                    />
                                    <InputTrainingCard
                                        placeholder="Repetições"
                                        keyboardType="numeric"
                                        placeholderTextColor={"#b8b8b8ca"}
                                        onChangeText={(text) => setValue('repetitions', text)}
                                    />
                                </View>
                            </ExerciseRegisterCard>
                            )
                        })}
                        <AddExerciseButton onPress={handleSubmit(addExerciseCard)}>
                            <MaterialIcons name="add" size={32} color="#3581B8" />
                        </AddExerciseButton>
                    </RegisterContainer>
                
            </Container>
        </TouchableWithoutFeedback>
    )
}