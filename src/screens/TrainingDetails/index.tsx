import React, {useState, useEffect} from "react";
import { getTrainingsById } from "../../services/Trainings";
import ScreenTitle from "../../components/ScreenTitle";
import { Container, ExerciseCard, ExerciseTitle, ExerciseInfosContainer, ExerciseInfos } from "./styles";

export default function TrainingDetails({route}){
    const trainingId = route.params
    const [training, setTraining] = useState() 

     async function fetchTraining(id:string){
        const response = await getTrainingsById(id)
        setTraining(response)
    } 

    useEffect(() => {
        fetchTraining(trainingId)
    },[])

    return(
        <Container>
            <ScreenTitle title={training?.name} backIcon={true}/>
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