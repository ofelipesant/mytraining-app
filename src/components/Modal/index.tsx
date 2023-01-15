import React, {useState, useEffect} from "react";
import { ModalBackdrop, ModalContainer, ModalInfos, ModalActions, ModalText, ButtonCancel, ButtonCancelText, ButtonDelete, ButtonDeleteText } from "./styles";
import { deleteTraining } from "../../services/Trainings";
import { useNavigation } from "@react-navigation/native";

interface PropTypes {
    trainingId: string;
    modalVisible: boolean
    handleVisibleModal: any
}

export default function Modal(props: PropTypes){
    const {trainingId, modalVisible, handleVisibleModal} = props
    const navigation = useNavigation()

    async function deleteRegister(){
        await deleteTraining(trainingId)
        navigation.navigate("Trainings")
    }
    
    return(
        modalVisible == true ? (
            <ModalBackdrop>
                <ModalContainer>

                    <ModalInfos>
                        <ModalText>Tem certeza que deseja excluir este treino?</ModalText>
                        <ModalText>A ação não poderá ser desfeita</ModalText>
                    </ModalInfos>

                    <ModalActions>
                        <ButtonCancel onPress={() => handleVisibleModal()}>
                            <ButtonCancelText>Cancelar</ButtonCancelText>
                        </ButtonCancel>
                        <ButtonDelete>
                            <ButtonDeleteText onPress={() => deleteRegister()}>Excluir</ButtonDeleteText>
                        </ButtonDelete>
                    </ModalActions>

                </ModalContainer>
            </ModalBackdrop>      
        ) : null
    )
}