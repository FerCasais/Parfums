import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "../screens/orders";
import { COLORS } from "../utils/colors";

const Stack = createNativeStackNavigator()

const OrderNavigator = () => {
    return (

       <Stack.Navigator initialRouteName="Orders">
        <Stack.Screen name="Orders" component={Orders}
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
export default OrderNavigator;