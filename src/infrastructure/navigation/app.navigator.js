import React from "react";                                                    // react pakke
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";     // navigation for bunden
import { Ionicons } from "@expo/vector-icons";                                // expo app ikoner

import { MarketNavigator } from "./market.navigator";                         // market navigation
import { TransActionsNavigator } from "./transactions.navigator"              // transactions navigation
import { SettingsNavigator }  from "./settings.navigator";

import { colors } from "../../infrastructure/theme/colors";                   // farve tema

import { MarketDataContextProvider } from "../../services/coin/coin.context"; // global context så alle vores componenter kan henter coin data

// tab til bund navigation
const Tab = createBottomTabNavigator();

// tab ikonere
const TAB_ICON = {
  Market: "md-bar-chart",
  Transactions: "md-swap-vertical-sharp",
  Settings: "md-settings",
};

// oprettelse af bund ikoner
const createScreenOptions = ({ route }) => {
  // henter alle navigation navnen
  const iconName = TAB_ICON[route.name];
  // opretter et ikon for vær route/navigation i vores app
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

// app navigation
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
        <Tab.Screen name="Settings" component={SettingsNavigator} />
      </Tab.Navigator>
    </MarketDataContextProvider>
);
