import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { MarketNavigator } from "./market.navigator";
import { TransActionsNavigator } from "./transactions.navigator"

import { colors } from "../../infrastructure/theme/colors";

import { MarketDataContextProvider } from "../../services/coin/coin.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Market: "md-bar-chart",
  Transactions: "md-swap-vertical-sharp"
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <MarketDataContextProvider>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          style: {
            backgroundColor: colors.bg.primary,
          },
          activeTintColor: colors.brand.primary,
        }}
      >
        <Tab.Screen name="Market" component={MarketNavigator} />
        <Tab.Screen name="Transactions" component={TransActionsNavigator} />
      </Tab.Navigator>
    </MarketDataContextProvider>
);
