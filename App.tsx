import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { Home } from "./src/Screens/Home";

import { CarDetails } from "./src/Screens/CarDetails";
import { Scheduling } from "./src/Screens/Scheduling";
import { SchedulingDetails } from "./src/Screens/SchedulingDetails";
import { SchedulingComplete } from "./src/Screens/SchedulingComplete";

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
        {/* <CarDetails /> */}
        {/* <Scheduling /> */}
        {/* <SchedulingDetails /> */}
        <SchedulingComplete />
      </ThemeProvider>
    </View>
  );
}
