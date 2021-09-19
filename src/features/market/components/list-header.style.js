import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

// under her er alt styling til list header til list header componentet
export const TitleWrapper = styled.View`
    margin-top: 20;
    padding-horizontal: 16;
`;

export const Title = styled.Text`
    font-size: 24;
    font-weight: bold;
    color: ${colors.text.secondary};
`;

export const Divider = styled.View`
    background-color: red;
    margin-horizontal: 16;
    margin-top: 16;
`;
