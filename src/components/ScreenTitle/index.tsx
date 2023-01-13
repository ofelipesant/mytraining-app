import React from "react";
import { StyleSheet } from "react-native";
import { TitleContainer, Title } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

type PropsType = {
    title: String
    backIcon?: Boolean
}

export default function ScreenTitle(props:PropsType){
    const { title, backIcon } = props
    const navigation = useNavigation()
    return(
        <TitleContainer style={styles.titleContainer}>
            { backIcon ? 
                <Ionicons 
                    name="arrow-back" 
                    size={32} color="white" 
                    style={styles.icon} 
                    onPress={() => navigation.goBack()}
                /> : null     
            }
            <Title>{title}</Title>
        </TitleContainer>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        borderBottomColor: "#fff",
        borderBottomWidth: 3,
    },
    icon: {
        marginRight: 12
    }
})