import React from "react";
import { TransactionsScreen } from "../../features/transactions/screens/transactions.screen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

// stack for denne navigation
const TransActionsStack = createStackNavigator();

// transaction skærm navigation 
export const TransActionsNavigator = ({ route, navigation }) => {
  return (
    <TransActionsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <TransActionsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={TransactionsScreen}
      />
    </TransActionsStack.Navigator>
  );
};
