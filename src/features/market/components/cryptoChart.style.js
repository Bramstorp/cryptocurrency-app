import styled from "styled-components/native";
import { ChartYLabel } from '@rainbow-me/animated-charts';

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
    font-size: 24;
    font-weight: bold;
`;