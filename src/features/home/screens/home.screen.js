import React, { useState, useContext } from "react";
import { Text } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component"

import { Balance, HomeBackground, BalanceText, BalanceProcent } from "../components/home.styles";

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <HomeBackground>
      </HomeBackground>
    </SafeArea>
  );
};
