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
import { createTraining } from "../../services/Trainings";
import { useNavigation } from "@react-navigation/native";

export default function CreateTraining(){
    const [ trainingName, setTrainingName ] = useState('')
    const [exerciseName, setExerciseName ] = useState('')
    const [weight, setWeight ] = useState('')
    const [series, setSeries] = useState('')
    const [repetitions, setRepetitions] = useState('')
    const [ exercises, setExercises ] = useState([])

    const navigation = useNavigation()

    function setExerciseData(){
        const exerciseData = {
            name: exerciseName,
            weight: weight,
            series: series,
            repetitions: repetitions
        }

        const exerciseList = [...exercises]
        exerciseList.push(exerciseData)
        setExercises(exerciseList)
    }

    function addExerciseCard(){
        setExerciseData()
    }

    async function saveTraining(){
      setExerciseData()

      const data = {
        name: trainingName,
        exercises: exercises
      }

      if(data.exercises[0].name == ""){
        data.exercises.shift()
      }

      const request = await createTraining(data)
      navigation.navigate("TrainingDetails", request?.data._id)
    }

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
                                        onChangeText={setExerciseName}
                                    />
                                    <InputTrainingCard
                                        placeholder="Peso (kg)"
                                        keyboardType="numeric"
                                        placeholderTextColor={"#b8b8b8ca"}
                                        onChangeText={setWeight}
                                    />
                                    <InputTrainingCard
                                        placeholder="Séries"
                                        keyboardType="numeric"
                                        placeholderTextColor={"#b8b8b8ca"}
                                        onChangeText={setSeries}
                                    />
                                    <InputTrainingCard
                                        placeholder="Repetições"
                                        keyboardType="numeric"
                                        placeholderTextColor={"#b8b8b8ca"}
                                        onChangeText={setRepetitions}
                                    />
                                </View>
                            </ExerciseRegisterCard>
                            )
                        })}
                        <AddExerciseButton onPress={() => addExerciseCard()}>
                            <MaterialIcons name="add" size={32} color="#3581B8" />
                        </AddExerciseButton>
                    </RegisterContainer>
                
            </Container>
        </TouchableWithoutFeedback>
    )
}