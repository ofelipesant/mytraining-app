import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeaderContainer, HeaderText } from './styles';

export default function Header(){
    return(
        <HeaderContainer>
            <MaterialCommunityIcons name="weight-lifter" size={50} color="white"/>
            <HeaderText>mytraining</HeaderText>
        </HeaderContainer>
    )
}