import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { ChartYLabel } from '@rainbow-me/animated-charts';

// under her er alt styling til crypto værdiere i crypto value component
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
    padding-horizontal: 16px;
    margin-top: 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CryptoSubWrapper = styled.View`
    padding-horizontal: 16px;
    margin-top: 10px;
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

export const ChartWrapper = styled.View`
    margin-vertical: 16px;
`;

export const ChartTitleWrapper = styled.View`
    margin-horizontal: 16px;
    align-items: center;
`;

export const ChartLineWrapper = styled.View`
    margin-top: 40px
`;

export const ChartTitle = styled(ChartYLabel)`
    font-size: 24px;
    font-weight: bold;
`;