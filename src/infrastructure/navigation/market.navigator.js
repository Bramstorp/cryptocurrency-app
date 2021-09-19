import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { MarketScreen } from "../../features/market/screens/market.screen";
import { MarketDetailScreen } from "../../features/market/screens/market-detail.screen";

// stack for denne navigation
const MarketStack = createStackNavigator();

// market skærm navigation 
export const MarketNavigator = () => {
  return (
    <MarketStack.Navigator headerMode="none">
      <MarketStack.Screen name="Market" component={MarketScreen} />
      <MarketStack.Screen name="MarketDetails" component={MarketDetailScreen} />
    </MarketStack.Navigator>
  );
};
