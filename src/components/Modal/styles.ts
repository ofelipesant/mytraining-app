import styled from "styled-components/native";

export const ModalBackdrop = styled.View`
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #181818;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const ModalContainer = styled.View`
    background-color: #3D3D3D;
    border-radius: 3px;
    width: 90%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    margin-top: 18px;
`

export const ModalInfos = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalActions = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`

export const ModalText = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    padding: 4px 0;
`

export const ButtonCancel = styled.TouchableOpacity`
    padding: 12px 0;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonCancelText = styled.Text`
    color: white;
    font-weight: 700;
    font-size: 18px;
`

export const ButtonDelete = styled.TouchableOpacity`
    background-color: #E08D79;
    border-radius: 4px;
    width: 40%;
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonDeleteText = styled.Text`
    color: white;
    font-weight: 700;
    font-size: 18px;
`

