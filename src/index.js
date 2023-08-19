import { View, SafeAreaView, ActivityIndicator } from "react-native";
import { styles } from "./style";
import { useFonts } from "expo-font";
import RouteNavigation from "./navigations";
import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Provider } from "react-redux";
import { store } from "./store";


export default function App() {
 

  const [fontsLoaded] = useFonts({
    "dancing-bold": require("../assets/fonts/DancingScript-Bold.ttf"),
    "dancing-script": require("../assets/fonts/DancingScript-SemiBold.ttf"),
    "castaro": require("../assets/fonts/CastoroTitling-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.splashFonts}>
        <ActivityIndicator style={styles.activityIndicator} />
      </View>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <RouteNavigation />
        </View>
      </SafeAreaView>
    </Provider>
  );
}
