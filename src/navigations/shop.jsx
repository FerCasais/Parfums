import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories } from "../screens";
import StartPage from "../screens/startPage";
import Products from "../screens/products";
import { COLORS } from "../utils/colors";
import ItemDetail from "../screens/itemsDetail";
import Cart from "../screens/cart";
import Messages from "../screens/messages";

const Stack = createNativeStackNavigator();

function ShopNavigator() {
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
          headerTitle: " messages",
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
    </Stack.Navigator>
  );
}

export default ShopNavigator;
