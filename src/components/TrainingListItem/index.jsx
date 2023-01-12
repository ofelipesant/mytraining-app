import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { View, Text, TouchableOpacity } from "react-native";
import { ItemContainer, ItemName } from "./styles";

export default function TrainingListItem(props){
    const { name } = props
    
    return(
        <ItemContainer>
            <MaterialCommunityIcons name="dumbbell" size={40} color="white" />
            <ItemName>{props.name}</ItemName>
        </ItemContainer>
    )
}