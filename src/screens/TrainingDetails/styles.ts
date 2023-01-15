import styled from "styled-components/native";

export const Container = styled.ScrollView`
    background-color: #181818;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 12px;
    color: white;
`

export const ExerciseCard = styled.View`
    background-color: #3D3D3D;
    width: 100%;
    height: 100px;
    margin: 12px 0;
    border-radius: 4px;
    padding: 12px;
`

export const ExerciseTitle = styled.Text`
    font-weight: 700;
    font-size: 24px;
    color: white;
`

export const ExerciseInfosContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    height: 100%;
    width: 100%;
`

export const ExerciseInfos = styled.Text`
    font-size: 18px;
    font-weight: 300;
    color: white;
    margin-right: 24px;
`

export const ButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const DeletButton = styled.TouchableOpacity`
    width: 136px;
    height: 40px;
    border: 3px solid #E08D79;
    background-color: transparent;
    border-radius: 4px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const TextButton = styled.Text`
    color: #E08D79;
    font-weight: 700;
    font-size: 22px;
    margin-left: 8px;
`