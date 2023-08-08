import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/profile";
import { COLORS } from "../utils/colors";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
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

export default ProfileNavigator;
