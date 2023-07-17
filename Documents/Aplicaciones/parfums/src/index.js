import { View, SafeAreaView, ActivityIndicator } from "react-native";
import { styles } from "./style";
import { useFonts } from "expo-font";
import RouteNavigation from "./navigations";
import * as React from 'react';
import { Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ItemDetail, Products } from "./screens";
import StartPage from "./screens/startPage";


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

    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <RouteNavigation />
        <NavigationContainer >
        {/* <Tab.Navigator >
          <Tab.Screen name="StartPage" component={StartPage} />
          <Tab.Screen name="Brands" component={Products} />
          <Tab.Screen name="Items" component={ItemDetail} />
        </Tab.Navigator> */}
      </NavigationContainer>
       
      </View>
    </SafeAreaView>
  );
}
