import { StatusBar as ExpoStatusBar } from "expo-status-bar";    // top status bar
import React, { useEffect } from "react";                                       // react pakke
import { ThemeProvider } from "styled-components/native";        // globalt theme for alt i navigationen

import { theme } from "./src/infrastructure/theme";              // Global style
import { Navigation } from "./src/infrastructure/navigation";    // mobil navigation

import { AuthContextProvider } from "../app/src/services/auth/auth.context";

import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  ScreenOrientation.unlockAsync()

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