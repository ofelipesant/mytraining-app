import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";
import ScreenTitle from "../../components/ScreenTitle";
import TrainingListItem from "../../components/TrainingListItem";
import { Container } from "./styles";
import { getTrainings } from "../../services/getTrainings";
import CreateTrainingButton from "../../components/CreateTrainingButton";

export default function Trainings(){
    const [trainings, setTrainings] = useState()

    async function fetchTrainings(){
        const response = await getTrainings()
        setTrainings(response)
    }

    useEffect(() => {
        fetchTrainings()
    },[])

    return(
        <Container>
            <ScreenTitle title="Meus treinos"/>
            <CreateTrainingButton/>
            {trainings && trainings.map((training) => {
                return(
                    <TrainingListItem name={training.name} key={training._id}/>
                )
            })}
        </Container>
    )
}