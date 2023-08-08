import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/register";

const Stack = createNativeStackNavigator();

const RegisterNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen
        name="Register"
        component={Register}
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
        }}
      />
    </Stack.Navigator>
  );
};

export default RegisterNavigator;
