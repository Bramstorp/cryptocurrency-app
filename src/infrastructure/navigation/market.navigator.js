import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { MarketScreen } from "../../features/market/screens/market.screen";

const MarketStack = createStackNavigator();

export const MarketNavigator = () => {
  return (
    <MarketStack.Navigator headerMode="none">
      <MarketStack.Screen name="Market" component={MarketScreen} />
    </MarketStack.Navigator>
  );
};
