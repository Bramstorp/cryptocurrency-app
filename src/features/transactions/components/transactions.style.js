import styled from "styled-components/native";
import { TextInput, Button } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(20, 20, 20);
`;

export const AvailableBalance = styled.Text`
    text-align: center; 
    color: ${colors.brand.primary}; 
    font-size: 20;
    position: absolute;
    top: 10%; 
`;

export const SendBtn = styled(TouchableOpacity)`
    width: 90%;
    border-radius: 10;
    background-color: rgb(30, 30, 30);
    padding: 16px;
    align-self: center;
    margin-top: 10;
`;

export const SendBtnText = styled.Text`
    color: ${colors.brand.primary};
    text-align: center;
    font-weight: 400;
    font-size: 20;
`