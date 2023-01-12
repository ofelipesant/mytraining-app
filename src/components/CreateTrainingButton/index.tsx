import React from "react";
import { ButtonContainer, Button, ButtonText } from "./styles";

export default function CreateTrainingButton(){
    return(
        <ButtonContainer>
            <Button>
                <ButtonText>Novo treino</ButtonText>
            </Button>
        </ButtonContainer>
    )
}