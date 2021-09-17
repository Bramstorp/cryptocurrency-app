import styled from "styled-components/native";
import { TextInput } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";

export const TitleWrapper = styled.View`
    margin-top: 20;
    padding-horizontal: 16;
`;

export const Title = styled.Text`
    font-size: 24;
    font-weight: bold;
    color: ${colors.text.secondary};
    padding-bottom: 50;
`;

export const Count = styled.Text`
    padding-top: 50;
    padding-bottom: 20;
    font-size: 24;
    font-weight: bold;
    color: ${colors.text.secondary};
    text-align: center
`;

export const InputValue = styled(TextInput)`
  align-self: center;
  width: 300px;
  height: 40px;
  background-color: white;
`;