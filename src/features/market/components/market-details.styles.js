import styled from "styled-components/native";
import { Image } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";

export const CryptoTitle = styled.Text`
    color: ${colors.text.secondary};
    padding-left: 10px;
    font-size: 30px;
`;

export const CryptoSupTitle = styled.Text`
    color: ${colors.text.primary};
    padding-left: 5px;
    font-size: 20px;
`;

export const CryptoDays = styled.Text`
    color: ${colors.text.primary};
    padding-left: 5px;
    font-size: 20px;
`;

export const CryptoPrice = styled.Text`
    color: ${colors.text.secondary};
    padding-left: 5px;
    font-size: 20px;
`;

export const PriceChangePercentage = styled.Text`
    color: ${colors.text.primary};
    padding-left: 5px;
    font-size: 20px;
`;

export const CryptoLogo = styled.Image`
    height: 30;
    width: 30;
`;

export const CryptoWrapper = styled.View`
    padding-horizontal: 16;
    margin-top: 24;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CryptoSubWrapper = styled.View`
    padding-horizontal: 16;
    margin-top: 10;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const LeftWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const RightWrapper = styled.View`
    align-items: flex-end;
`;