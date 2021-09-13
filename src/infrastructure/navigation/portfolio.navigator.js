import React from "react";
import { PortfolioScreen } from "../../features/portfolio/screens/portfolio.screen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const PortfolioNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Portfolio"
        component={PortfolioScreen}
      />
    </SettingsStack.Navigator>
  );
};
