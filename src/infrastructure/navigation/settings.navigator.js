import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </SettingsStack.Navigator>
  );
};
