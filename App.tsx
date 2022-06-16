import React, { useCallback, useEffect, useState } from "react";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { Home } from "./src/Screens/Home";

import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import theme from "./src/styles/theme";
import { CarDetails } from "./src/Screens/CarDetails";
import { View } from "react-native";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  // const [fontsLoaded] = useFonts({
  //   Inter_400Regular,
  //   Inter_500Medium,
  //   Archivo_400Regular,
  //   Archivo_500Medium,
  //   Archivo_600SemiBold,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Inter_400Regular,
          Inter_500Medium,
          Archivo_400Regular,
          Archivo_500Medium,
          Archivo_600SemiBold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        {/* <Home /> */}
        <CarDetails />
      </ThemeProvider>
    </View>
  );
}