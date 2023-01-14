import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import { ItemContainer, ItemName } from "./styles";

export default function TrainingListItem(props){
    const { name, training } = props
    const navigation = useNavigation()

    return(
        <ItemContainer onPress={() => navigation.navigate("TrainingDetails", training)}>
            <MaterialCommunityIcons name="dumbbell" size={40} color="white" />
            <ItemName>{name}</ItemName>
        </ItemContainer>
    )
}