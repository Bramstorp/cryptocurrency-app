import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Feather';
import { colors } from "../../../infrastructure/theme/colors";
import { TouchableOpacity } from 'react-native';

// under her er alt styling til vores transaction skærm
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

export const AmountText = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 35; 
    font-weight: bold;
    position: absolute;
    top: 20%;
`

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
`;

export const NumberWrap = styled.View`
    width: 100%;
    position: absolute; 
    bottom: 50;
`;

export const FlexRow = styled.View`
    flex-direction: row;
    width: 100%;
    padding-horizontal: 12%;
`;

export const NumberBtn = styled(TouchableOpacity)`
    width: 34%;
    margin-horizontal: 10; 
    margin-vertical: 15;
`;

export const NumberText = styled.Text`
    color: rgb(255, 255, 255);
    font-size: 35;
    font-weight: 400;
`;

export const IconBtn = styled(Icon)`
    font-size: 30;
    position: relative; 
    top: 10;
`;