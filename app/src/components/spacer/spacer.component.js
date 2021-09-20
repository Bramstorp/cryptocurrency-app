import React from "react";
import styled, { useTheme } from "styled-components/native";

// spacer component

// størrelse varianter
const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
  xl: 4,
  xxl: 5,
};

// position
const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

// hent valgt position, størrelse og hvad tema
const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

// spacer view style
const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

// spacer component
export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

//sætter default props hvis position og size ikke bliver valgt
Spacer.defaultProps = {
  position: "top",
  size: "small",
};
