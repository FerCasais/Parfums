import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import ShopNavigator from "./shop";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../utils/colors";


const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 11,
          color: COLORS.secodary,
          fontFamily: "castaro",
        },
        tabBarStyle: {
          backgroundColor: COLORS.background,
        },

        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "gray",
        tabBarIconStyle: {
          fontSize: 22,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "folder-home" : "home-outline"}
                size={28}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen name="Orders List" component={OrdersNavigator}
       options={{
        tabBarIcon: ({ focused, color }) => {
          return (
            <Ionicons name={focused? "ios-list-circle" : "ios-list-circle-outline"} size={28} color={color} />
          );
        },
      
        tabBarBadgeStyle: {
            color: COLORS.white,
            backgroundColor: COLORS.primary,
        }
      }} />
      <Tab.Screen name="CartNavigator" component={CartNavigator} 
       options={{
        tabBarIcon: ({ focused, color }) => {
          return (
            <MaterialCommunityIcons name={focused ? "cart-heart" : "cart-outline"} size={24} color={color} />
          );
        },
        tabBarBadge: 4,
      }}/>
    </Tab.Navigator>
  );
};

export default TabsNavigator;
