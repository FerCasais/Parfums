import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/cart";
import { COLORS } from "../utils/colors";

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
    return (

       <Stack.Navigator initialRouteName="Cart">
        <Stack.Screen name="Cart" component={Cart}
         options={{
            
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 28,
              color: COLORS.white,
              fontFamily: "dancing-bold",
            },
          }}/>
       
       </Stack.Navigator>
    )

}

export default CartNavigator;