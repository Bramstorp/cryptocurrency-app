import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

// navigation af vores app
export const Navigation = () => {
  const isAuthenticated = false
  
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
