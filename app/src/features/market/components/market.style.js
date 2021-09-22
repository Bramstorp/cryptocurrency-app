import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";

// alt syling til market skærmen
export const Container = styled.View`
    flex: 1;
    background-color: 'rgb(20,20,20)';
`;

export const OpenCoinView = styled.View`
  height: 60px;
  align-items: center;
  align-self: center;
  background-color: rgb(30, 30, 30);
  width: 100%;
`;

export const CoinBtn = styled(Button).attrs({
    color: colors.brand.primary,
  })`
    padding: ${(props) => props.theme.space[2]};
  `;
  
