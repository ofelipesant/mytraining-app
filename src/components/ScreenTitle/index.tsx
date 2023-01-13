import React from "react";
import { StyleSheet } from "react-native";
import { TitleContainer, Title } from "./styles";

type PropsType = {
    title: String
}

export default function ScreenTitle(props:PropsType){
    const { title } = props

    return(
        <TitleContainer style={styles.titleContainer}>
            <Title>{title}</Title>
        </TitleContainer>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        borderBottomColor: "#fff",
        borderBottomWidth: 3,
    }
})