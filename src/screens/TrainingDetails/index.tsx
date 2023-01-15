import React, {useState, useEffect} from "react";
import { getTrainingsById } from "../../services/Trainings";
import ScreenTitle from "../../components/ScreenTitle";
import { Container, ExerciseCard, ExerciseTitle, ExerciseInfosContainer, ExerciseInfos, DeletButton, TextButton, ButtonContainer } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';
import { View } from "react-native";
import Modal from "../../components/Modal";

export default function TrainingDetails({route}){
    const trainingId = route.params
    const [training, setTraining] = useState() 
    const [modalVisible, setModalVisible] = useState(false)

    async function fetchTraining(id:string){
        const response = await getTrainingsById(id)
        setTraining(response)
    } 

    function handleVisibleModal(){
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        fetchTraining(trainingId)
    },[])

    return(
        <Container>
            <ScreenTitle title={training?.name} backIcon={true}/>
            <Modal trainingId={trainingId} modalVisible={modalVisible} handleVisibleModal={handleVisibleModal}/>
            <ButtonContainer>
                <DeletButton onPress={() => handleVisibleModal()}>
                    <FontAwesome5 name="trash-alt" size={18} color="#E08D79" />
                    <TextButton>Excluir</TextButton>
                </DeletButton>
            </ButtonContainer>
            {
                training && training?.exercises?.map((exercise) => {
                    return(    
                        <ExerciseCard key={exercise._id}>
                            <ExerciseTitle>{exercise.name}</ExerciseTitle>
                            <ExerciseInfosContainer>
                                <ExerciseInfos>{exercise.weight}kg</ExerciseInfos>
                                <ExerciseInfos>{exercise.repetitions} Repetições</ExerciseInfos>
                                <ExerciseInfos>{exercise.series} Séries</ExerciseInfos>
                            </ExerciseInfosContainer>
                        </ExerciseCard>
                    )
                })
            }
        </Container>
    )
}