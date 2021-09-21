import { StatusBar as ExpoStatusBar } from "expo-status-bar";    // top status bar
import React from "react";                                       // react pakke
import { ThemeProvider } from "styled-components/native";        // globalt theme for alt i navigationen

import { theme } from "./src/infrastructure/theme";              // Global style
import { Navigation } from "./src/infrastructure/navigation";    // mobil navigation

import { AuthContextProvider } from "../app/src/services/auth/auth.context";


export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}