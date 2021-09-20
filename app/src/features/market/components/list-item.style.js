import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

// under her er alt styling til list item til list item componentet
export const Wrapper = styled.View`
    padding-horizontal: 16;
    margin-top: 24;
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

export const Image = styled.Image`
    height: 48;
    width: 48;
`;

export const LeftTitle = styled.View`
    margin-left: 8;
`;

export const Title = styled.Text`
    font-size: 18;
    color: ${colors.text.secondary};
`;

export const SubTitle = styled.Text`
    margin-top: 4;
    font-size: 14;
    color: ${colors.text.primary};
`;



