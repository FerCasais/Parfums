import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories } from "../screens";
import StartPage from "../screens/startPage";
import Products from "../screens/products";
import { COLORS } from "../utils/colors";
import ItemDetail from "../screens/itemsDetail";
import Cart from "../screens/cart";
import Messages from "../screens/messages";
import { useDispatch } from 'react-redux';
import { logout } from '../store/auth/auth.slice';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function ShopNavigator() {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator initialRouteName="StartPage">
      <Stack.Screen
        name="StartPage"
        component={StartPage}
        options={{
          headerTitleAlign: "center",
          headerShown: false,
         
        }}
      />
      <Stack.Screen
        name="Brands"
        component={Categories}
        options={{
          title: "Boutique de Parfums",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 28,
            color: COLORS.white,
            fontFamily: "dancing-bold",
          },
         
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ navigation, route }) => ({
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.background2,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 28,
            color: COLORS.secodary,
            fontFamily: "castaro",
          },
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="ItemDetail"
        component={ItemDetail}
        options={({ navigation, route }) => ({
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.background2,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 28,
            color: COLORS.secodary,
            fontFamily: "castaro",
          },
          title: route.params.name,
        })}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({ navigation, route }) => ({
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.background2,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 28,
            color: COLORS.secodary,
            fontFamily: "castaro",
          },
     
     
        
                   
        })}
      />

      <Stack.Screen
        name="Messages"
        component={Messages}
        options={({ navigation, route }) => ({
          headerTitle: "Messages",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.background2,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 28,
            color: COLORS.secodary,
            fontFamily: "castaro",
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.icon} onPress={() => dispatch(logout())}>
              <Ionicons name="ios-log-out-outline" size={24} color={COLORS.white} /><Text style={styles.logout}>Log Out</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default ShopNavigator;

const styles = StyleSheet.create({

  icon: {
    marginRight: Platform.OS === 'android' ? 15 : 0,
  },
  logout: {
    color: COLORS.white,
  }
});
