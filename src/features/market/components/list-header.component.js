import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { colors } from "../../../infrastructure/theme/colors";

import { TitleWrapper, Title, Divider } from "./list-header.style"

export const ListHeader = () => (
    <>
        <TitleWrapper>
          <Title>Markets</Title>
        </TitleWrapper>
      <Divider/>
    </>
  )