import React from "react";
import { ButtonContainer, Button, ButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function CreateTrainingButton(){
    const navigation = useNavigation()

    return(
        <ButtonContainer>
            <Button onPress={() => navigation.navigate("CreateTraining")}>
                <ButtonText>Novo treino</ButtonText>
            </Button>
        </ButtonContainer>
    )
}