import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { HomeNavigator } from "./home.navigator";
import { SettingsNavigator } from "./settings.navigator"
import { PortfolioNavigator } from "./portfolio.navigator"
import { TransActionsNavigator } from "./transactions.navigator"

import { colors } from "../../infrastructure/theme/colors";

import { MarketDataContextProvider } from "../../services/coin/coin.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Markets: "md-bar-chart",
  Settings: "md-settings",
  Portfolio: "md-pie-chart",
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
          activeTintColor: colors.brand.primary,
          inactiveTintColor: colors.brand.muted,
        }}
      >
        <Tab.Screen name="Markets" component={HomeNavigator} />
        <Tab.Screen name="Portfolio" component={PortfolioNavigator} />
        <Tab.Screen name="Transactions" component={TransActionsNavigator} />
        <Tab.Screen name="Settings" component={SettingsNavigator} />
      </Tab.Navigator>
    </MarketDataContextProvider>
);
