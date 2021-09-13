import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { PricesScreen } from "../../features/prices/screens/prices.screen";

const CryptoDetailsStack = createStackNavigator();

export const PricesNavigator = () => {
  return (
    <CryptoDetailsStack.Navigator headerMode="none">
      <CryptoDetailsStack.Screen name="Prices" component={PricesScreen} />
    </CryptoDetailsStack.Navigator>
  );
};
