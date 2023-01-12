import styled from "styled-components/native";

export const ItemContainer = styled.TouchableOpacity`
    margin: 8px 0;
    padding: 8px;
    width: 100%;
    height: 60px;
    background-color: #3D3D3D;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
`

export const ItemName = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: 700;
    margin-left: 12px;
`