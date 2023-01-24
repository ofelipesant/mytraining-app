import styled from "styled-components/native";

export const Container = styled.ScrollView`
    background-color: #181818;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 12px;
`

export const RegisterContainer = styled.View`
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.TextInput`
    width: 100%;
    height: 40px;
    color: white;
    background-color: #3D3D3D;
    border-radius: 4px;
    font-size: 18px;
    padding: 4px;
    margin-bottom: 16px;
`

export const ExerciseRegisterCard = styled.View`
    width: 100%;
    border-radius: 4px;
    margin: 8px 0;
    padding: 8px;
    border: 3px solid white;
`

export const InputTrainingCard = styled.TextInput`
    color: white;
    padding: 8px;
    margin: 8px 0;
    height: 40px;
    font-size: 16px;
    background-color: #3D3D3D;
`

export const AddExerciseButton = styled.TouchableOpacity`
    width: 100%;
    margin: 8px 0;
    padding: 4px;
    border: 3px solid #3581B8;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Subtitle = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: 700;
    margin: 4px 0;
    width: 100%;
    text-align: left;
`

export const SaveContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const SaveButton = styled.TouchableOpacity`
    background-color: #618985;
    color: white;
    width: 200px;
    height: 46px;
    margin-top: 20px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`

export const SaveButtonText = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: 700;
`