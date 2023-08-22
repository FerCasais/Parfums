import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import ShopNavigator from "./shop";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../utils/colors";
import { useSelector } from "react-redux";
import ProfileNavigator from "./profile1";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {

  const cartItems = useSelector((state) => state.cart.items);

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
      <Tab.Screen  name="OrdersTab" component={OrdersNavigator}
       options={{
        tabBarLabel: 'Orders',
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
        tabBarBadge: cartItems.length,
        tabBarBadgeStyle: {
          backgroundColor: COLORS.primary,
          color: COLORS.white,
          fontSize: 11,
        },
      }}/>
       <Tab.Screen  name="Profiles" component={ProfileNavigator}
       options={{
        tabBarLabel: 'Profiles',
        tabBarIcon: ({ focused, color }) => {
          return (
            <Ionicons name={focused? "person-add-sharp" : "person-add-outline"} size={28} color={color} />
          );
        },
       tabBarBadgeStyle: {
            color: COLORS.white,
            backgroundColor: COLORS.primary,
        }
      }} />
       
    </Tab.Navigator>
  );
};

export default TabsNavigator;